var iMsg = {
	select2LangCode : "en",
	usernameRegFailMsg : "Contains only letters, numbers, underscores, and not numbers begin with",
	notFirLasSpaceMsg : "Can not contain spaces at the begin and end",
	formatSizeErr : "Your input format or size is incorrect",
	inputUsername : "Please enter username",
	RepeatedUname: "This username already exists",
	inputChname: "Please enter full name",
	inputPassword: "Please enter password",
	passLength: "password length is {0}-{1} characters",
	inputNewPassword: "Please enter a new password",
	inputOldPassword: "Please enter the old password",
	oldPassErr: "Old password validation error",
	confirmPassword: "Please confirm the password",
	InconsistentPassword: "Inconsistent password entered twice",
	correctYear: "Please enter the correct year",
	loginFail: "Login failed",
	reLogin: "You have logged out, please login again",
	unamePassErr: "The username or password you entered is incorrect",
	registerFail: "Register failed",
	registerNoLogin: "registration successful, automatic login failed, please manually login",
	denyEditSuperuserPerm: "Unable to modify current login administrator privileges",
	denyRemoveSuperuser: "Unable to delete the currently logged in administrator user",
	all: "All",
	add: "Add",
	addSuccess: "Add successfully",
	addFail: "Failed to add",
	queryFail: "Query failed",
	edit: "Edit",
	editSuccess: "Modified successfully",
	editFail: "Edit failed",
	remove: "Delete",
	removeOne: "confirm delete user {0}?",
	removeMultiple: "Confirm deletion of selected {0} users?",
	removeSuccess: "Delete successfully",
	removeFail: "Delete failed",
	userNotExist: "The user does not exist or has been deleted",
	confirm: "Confirm",
	ok: "OK",
	cancel: "Cancel",
	sProcessing: "Processing ...",
	sLengthMenu: "_MENU_ items per page",
	sZeroRecords: "No match results",
	sInfo: "A total of _PAGES_ pages, _TOTAL_ records",
	sInfoEmpty: "Currently displays 0 to 0, a total of 0",
	sInfoFiltered: "(filtered by _MAX_ result)",
	sInfoPostFix: "",
	sSearch: "Search:",
	sUrl: "",
	sEmptyTable: "No records found",
	sLoadingRecords: "Loading ...",
	sInfoThousands: ",",
	sFirst: "First page",
	sPrevious: "Previous page",
	sNext: "Next page",
	sLast: "Last page",
	sJump: "Jump",
	sSortAscending: ": Sort this column in ascending order",
	sSortDescending: ": Sort this column in descending order",
	superuser: "Administrator",
	normal: "Normal"
}
/*
 * var str0 = "{0} must smaller than {1}" var str1 = str0.fillArgs("apple",
 * "watermelon"); srt1 equals to "apple must smaller than watermelon"
 */
String.prototype.fillArgs = function() {
	var formated = this;
	for (var i = 0; i < arguments.length; i++) {
		var param = "\{" + i + "\}";
		formated = formated.replace(param, arguments[i]);
	}
	return formated;
}