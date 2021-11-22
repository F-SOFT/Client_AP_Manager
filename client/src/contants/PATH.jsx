export const PATH = {
  HOME: "/home",
  CATEGORIES: "/categories",
  SCHEDULE: "/schedule",
  SCORE: "/score",
  STATUS: "/status",
  PROFILE: "/profile",
  COURSE_CLASS: "/course/:id",
  LOGIN: "/login",
  ADMIN: "/admin",
  MANAGERUSER: "/admin/user",
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
};

export const PATH_SCORE = {
  GET_SCORE: "/scores",
};
