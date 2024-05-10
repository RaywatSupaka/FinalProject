export const API_URLS = {
    LOCAL: 'http://localhost:8080',
    //auth
    LOGIN: '/UserService/login',
    REGIST: '/UserService/register',
    //website
    WEBSITEDETAILS: '/WebsiteDetailsService/allWebsite',
    WEBSITEDETAILSBYTYPE: '/WebsiteDetailsService/findByType',
    WEBSITEDETAILSDELETE: '/AdminService/website/',
    ADDWBSITEDETAIL: '/AdminService/addnewweb',
    //user
    USERPF: '/UserService/findById',
    USEREDIT: '/UserService/edit',
    //user-admin
    USERSHOWALL: '/AdminService/findAllUser',
    USERDELETE: '/AdminService/userdel',
  };