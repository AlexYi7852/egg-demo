
exports.keys = 'Wo++Alex==7852'

exports.security = {
  csrf: {
    enable: false
  }
};

exports.view = {
  mapping: {
    '.html': 'ejs'
  }
};

exports.cluster = {
  listen: {
    path: '',
    port: 8000,
    hostname: '0.0.0.0'
  }
}

exports.mysql = {
  // 单数据库信息配置
  client: {
    port: '3306',
    user: 'root',
    host: 'localhost',
    database: 'myBlog',
    password: 'Alex001573'
  },
  // 是否加载到 app 上，默认开启
  app: true,
  // 是否加载到 agent 上，默认关闭
  agent: true
};

// exports.redis = {
//   clients: {
//     session: {
//       host: '127.0.0.1',
//       port: 6379,
//       password: '',
//       db: '0'
//     }
//   },
// };

// //这下面这个是使用那个redis数据库进行存储session
// exports.sessionRedis = {
//   key: "EGG_SESSION",
//   maxAge: 24 * 3600 * 1000, // 1 天
//   httpOnly: true,
//   encrypt: false
// };