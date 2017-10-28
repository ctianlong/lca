package tk.mybatis.springboot.conf;

/**
 * 应用常量
 * @author Tianlong
 *
 */
public final class Constants {

	//登录名正则，字母数字下划线且不能以数字开头
	public static final String LOGIN_REGEX = "^[_A-Za-z][_A-Za-z0-9]*$";
	
	public static final String NO_FIRST_LAST_SPACE_REGEX = "(^\\S.*\\S$)|(^\\S$)";
	
	//用户初始密码
	public static final String INITIAL_PASSWORD = "000000";
	
	public static final int PASSWORD_MIN_LENGTH = 6;
	public static final int PASSWORD_MAX_LENGTH = 18;
	
	private Constants() {
	}
	
}
