package com.example.react_learning.shortlink;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.web.server.ResponseStatusException;

import java.time.Instant;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.*;

/**
 * 純 Mockito 單元測試：完全沒有 @SpringBootTest / @WebMvcTest / @DataJpaTest，
 * 不會啟動任何 Spring 容器，也不會連資料庫——ShortLinkRepository 是用 @Mock
 * 手動做出來的假物件，ShortLinkService 則是用 @InjectMocks 把假物件「塞」進建構子。
 * 這種測試跑起來是毫秒等級的速度，最適合拿來測「商業邏輯」本身，
 * 而不是測 Spring 有沒有正確接線（那是 @SpringBootTest 的工作）。
 *
 * 這裡特別鎖定 generateUniqueCode() 的「產生碰撞就重試」邏輯——
 * 這正是 Comment/Post 那種沒有 Service 層的簡單 CRUD 不會出現的東西，
 * 也是這個專案裡唯一需要「控制隨機亂數的碰撞情境」才測得到的邏輯。
 */
@ExtendWith(MockitoExtension.class)
class ShortLinkServiceTest {

    @Mock
    private ShortLinkRepository shortLinkRepository;

    @InjectMocks
    private ShortLinkService shortLinkService;

    @Test
    void createLink_retriesGeneratingCode_whenFirstAttemptCollides() {
        // 第一次呼叫 findByCode 回傳「已經有人用了」，逼迫 Service 的 while 迴圈重新產生一組新代碼；
        // 第二次才回傳「沒人用」，讓迴圈可以結束。
        when(shortLinkRepository.findByCode(anyString()))
                .thenReturn(Optional.of(new ShortLinkEntity("existing", "https://taken.example", Instant.now())))
                .thenReturn(Optional.empty());

        ShortLink result = shortLinkService.createLink(new ShortLinkRequest("https://example.com"));

        assertThat(result.targetUrl()).isEqualTo("https://example.com");
        // 驗證「真的有重試」：findByCode 被呼叫了 2 次，而不是只呼叫 1 次就直接用碰撞的代碼。
        verify(shortLinkRepository, times(2)).findByCode(anyString());
        verify(shortLinkRepository, times(1)).save(any(ShortLinkEntity.class));
    }

    @Test
    void getLink_whenCodeNotFound_throws404ResponseStatusException() {
        when(shortLinkRepository.findByCode("missing")).thenReturn(Optional.empty());

        assertThatThrownBy(() -> shortLinkService.getLink("missing"))
                .isInstanceOf(ResponseStatusException.class)
                .hasMessageContaining("找不到短網址");
    }

    @Test
    void resolveAndCount_incrementsClicksAndPersists() {
        ShortLinkEntity entity = new ShortLinkEntity("abc123", "https://example.com", Instant.now());
        when(shortLinkRepository.findByCode("abc123")).thenReturn(Optional.of(entity));

        String targetUrl = shortLinkService.resolveAndCount("abc123");

        assertThat(targetUrl).isEqualTo("https://example.com");
        assertThat(entity.getClicks()).isEqualTo(1L); // 商業邏輯：每解析一次就 +1
        verify(shortLinkRepository).save(entity);
    }

    @Test
    void sanityCheck_environmentIsWorking() {
        assertThat(1 + 1).isEqualTo(2);
    }
}

