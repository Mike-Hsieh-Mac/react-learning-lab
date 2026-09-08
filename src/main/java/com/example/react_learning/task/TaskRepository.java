package com.example.react_learning.task;
import org.springframework.data.jpa.repository.JpaRepository;
/**
 * TaskRepository：任務功能的「資料存取層」——真・資料庫版！
 *
 * <p>對比之前的記憶體版（自己寫 CopyOnWriteArrayList + AtomicLong，約 100 行），
 * 現在只剩下「一個介面宣告、零個方法」。這不是偷懶，而是 Spring Data JPA 的魔法：</p>
 *
 * <h3>interface extends JpaRepository 就結束了？誰來實作？</h3>
 * <p>Spring 啟動時看到這個介面，會「自動產生一個實作類別」並註冊成 Bean。
 * 所以不需要再寫 {@code @Repository}，也不用自己寫任何 SQL。
 * 泛型參數 {@code <TaskEntity, Long>} 的意思是：
 * 「這個 Repository 管理 TaskEntity 這張表，主鍵型別是 Long」。</p>
 *
 * <h3>免費獲得的方法（節錄，全部由 Spring 實作好）</h3>
 * <ul>
 *   <li>{@code findAll()} → SELECT * FROM tasks（取代原本的 List.copyOf(tasks)）</li>
 *   <li>{@code findById(id)} → SELECT ... WHERE id=?，回傳 {@code Optional<TaskEntity>}
 *       （和記憶體版一樣用 Optional 表達「可能不存在」，Service 的 orElseThrow 寫法不變）</li>
 *   <li>{@code save(entity)} → id 是 null 就 INSERT、有 id 就 UPDATE，
 *       並把資料庫產生的 id 填回物件（取代原本的 nextId() + add() + replace()）</li>
 *   <li>{@code deleteById(id)} / {@code existsById(id)} → DELETE / SELECT COUNT ...</li>
 * </ul>
 *
 * <h3>和記憶體版的對照表</h3>
 * <pre>
 * 記憶體版（自己寫）                  JPA 版（Spring 生成）
 * ------------------------------  --------------------------------
 * nextId()  AtomicLong 產生 id      資料庫 AUTO_INCREMENT 產生 id
 * findAll() 回傳 List.copyOf       findAll() 下 SELECT
 * findById() stream().filter()    findById() 下 WHERE id=?
 * save() list.add()               save() 下 INSERT
 * replace() list.replaceAll()     save() 下 UPDATE（有 id 就是更新）
 * deleteById() removeIf()         deleteById() 下 DELETE
 * 重啟資料就消失                     資料存在 ./data/*.mv.db，重啟還在
 * </pre>
 *
 * <p>還可以用「方法名稱」宣告查詢，Spring 會解析名字自動產生 SQL，例如：
 * {@code List<TaskEntity> findByDoneTrue();} → SELECT ... WHERE done = true。
 * 想擴充「只看已完成任務」的 API 時可以試試看。</p>
 */
public interface TaskRepository extends JpaRepository<TaskEntity, Long> {
}
