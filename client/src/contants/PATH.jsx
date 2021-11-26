export const PATH = {
    HOME: "/home",
    CATEGORIES: "/categories",
    SCHEDULE: "/schedule",
    SCORE: "/score",
    STATUS: "/status",
    PROFILE: "/profile",
    COURSE_CLASS: "/course/:id",
    CLASS_SCHEDUE: "/class/schedule",
    LOGIN: "/login",
    ADMIN: "/admin",
    MANAGERUSER: "/admin/user",
    ADMIN_CLASS: "/admin/class",
    MANAGER: "/manager",
    MAJOR_COURSE: "/categories/:course",
    MANAGERCOURSE: "/manager/course",
    MANAGER_CATEGORY: "/manager/category",
};

export const PATH_AUTH = {
    LOGIN: "/users/login",
    GETUSER: "/users/infomation",
    GET_USERS: "/users",
    POST_USER_ADMIN: "/users/store",
    GET_ROLES: "/roles",
    POST_USER: "/users/store",
    DELETE_USER: "/users",
    UPDATE_USER: "/users",
    FIND_USER: "/users/find",
};

export const PATH_MAJOR = {
    GET_MAJORS: "/majors",
    POST_MAJOR: "/majors/store",
    UPDATE_MAJOR: "/majors",
    DELETE_MAJOR: "/majors",
};

export const PATH_COURSE = {
    GET_COURSE_MAJOR: "/courses/majors",
    GET_COURSES: "/courses",
    POST_COURSE: "/courses/store",
    UPDATE_COURSE: "/courses",
    DELETE_COURSE: "/courses",
};

export const PATH_CLASS = {
    GET_CLASSES: "/class",
    GET_CLASS_COURSE: "/class/courses",
    GET_CLASS_USER: "/class/user",
    POST_CLASS: "/class/store",
    UPDATE_CLASS: "/class",
    DELETE_CLASS: "/class",
    ADD_STUDENT: "/class/student",
};

export const PATH_SCORE = {
    GET_SCORE: "/scores",
    GET_SCORE_USER: "/scores/user",
};

export const PATH_SCHEDULE = {
    GET_SCHEDULE_CLASS: "/schedules",
};
