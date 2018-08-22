
package com.qz.dao.mapper;
import com.qz.entity.User;
import org.springframework.stereotype.Repository;

import java.util.List;
/**
 * Demo class
 *
 * @author qinzhi
 * @date 2018-08-20 14:33:15
 */
@Repository("userMapper")
public interface UserMapper {
    /**
     * 新增用戶
     * @param user
     * @return
     * @throws Exception
     */
    public int insertUser(User user) throws Exception;
    /**
     * 修改用戶
     * @param user
     * @param id
     * @return
     * @throws Exception
     */
    public int updateUser (User user,int id) throws Exception;
    /**
     * 刪除用戶
     * @param id
     * @return
     * @throws Exception
     */

    public int deleteUser(int id) throws Exception;
    /**
     * 根据id查询用户信息
     * @param user
     * @return user
     * @throws Exception
     */
    public User userlogin(User user) throws Exception;
    /**
     * 根据id查询用户信息
     * @param id
     * @return
     * @throws Exception
     */
    public User selectUserById(int id) throws Exception;
    /**
     * 查询所有的用户信息
     * @return
     * @throws Exception
     */
    public List<User> selectAllUser() throws Exception;

}