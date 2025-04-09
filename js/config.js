// 全局常量配置
const PROXY_URL = 'https://proxy.mengze.vip/proxy/';
const HOPLAYER_URL = 'https://hoplayer.com/index.html';
const SEARCH_HISTORY_KEY = 'videoSearchHistory';
const MAX_HISTORY_ITEMS = 5;

// 网站信息配置
const SITE_CONFIG = {
    name: '1836TV',
    url: 'https://94yyfs.zone.id',
    description: '私家影院',
    logo: 'https://images.icon-icons.com/38/PNG/512/retrotv_5520.png',
    version: '1.0.0'
};

// API站点配置
const API_SITES = {
    th: {
        api: 'https://thzy1.me',
        name: '桃花',
    },
    nxx: {
        api: 'https://naixxzy.com',
        name: '香香',
    },
    fh: {
        api: 'http://fhapi9.com',
        name: '帆号',
    },
    lb: {
        api: 'https://lbapi9.com',
        name: '乐播',
    },
    soav: {
        api: 'https://api.souavzy.vip',
        name: '搜爱维',
    },
    155: {
        api: 'https://155api.com',
        name: '155',
    },
    sl: {
        api: 'https://slapibf.com',
        name: '森林',
    },
    fq: {
        api: 'https://fqzy.me',
        name: '番茄',
    },
    sw: {
        api: 'https://siwazyw.tv',
        name: '四娃',
    },
    dd: {
        api: 'https://api.ddapi.cc',
        name: '滴滴',
    },
    yt: {
        api: 'https://apiyutu.com',
        name: '玉兔',
    },
    sy: {
        api: 'https://shayuapi.com',
        name: '鲨鱼',
    },
    lj: {
        api: 'https://apilj.com',
        name: '辣椒',
    },
    hg: {
        api: 'https://www.avre06.com',
        name: '黄瓜',
    },
    lsb: {
        api: 'https://apilsbzy1.com',
        name: 'lsb',
    }
};

// 添加聚合搜索的配置选项
const AGGREGATED_SEARCH_CONFIG = {
    enabled: true,             // 是否启用聚合搜索
    timeout: 8000,            // 单个源超时时间（毫秒）
    maxResults: 10000,          // 最大结果数量
    parallelRequests: true,   // 是否并行请求所有源
    showSourceBadges: true    // 是否显示来源徽章
};

// 抽象API请求配置
const API_CONFIG = {
    search: {
        // 修改搜索接口为返回更多详细数据（包括视频封面、简介和播放列表）
        path: '/api.php/provide/vod/?ac=videolist&wd=',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    },
    detail: {
        // 修改详情接口也使用videolist接口，但是通过ID查询，减少请求次数
        path: '/api.php/provide/vod/?ac=videolist&ids=',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    }
};

// 优化后的正则表达式模式
const M3U8_PATTERN = /\$https?:\/\/[^"'\s]+?\.m3u8/g;

// 添加自定义播放器URL
const CUSTOM_PLAYER_URL = 'player.html'; // 使用相对路径引用本地player.html

// 增加视频播放相关配置
const PLAYER_CONFIG = {
    autoplay: true,
    allowFullscreen: true,
    width: '100%',
    height: '600',
    timeout: 15000,  // 播放器加载超时时间
    filterAds: true,  // 是否启用广告过滤
    autoPlayNext: true  // 默认启用自动连播功能
};

// 增加错误信息本地化
const ERROR_MESSAGES = {
    NETWORK_ERROR: '网络连接错误，请检查网络设置',
    TIMEOUT_ERROR: '请求超时，服务器响应时间过长',
    API_ERROR: 'API接口返回错误，请尝试更换数据源',
    PLAYER_ERROR: '播放器加载失败，请尝试其他视频源',
    UNKNOWN_ERROR: '发生未知错误，请刷新页面重试'
};

// 添加进一步安全设置
const SECURITY_CONFIG = {
    enableXSSProtection: true,  // 是否启用XSS保护
    sanitizeUrls: true,         // 是否清理URL
    maxQueryLength: 100,        // 最大搜索长度
    allowedApiDomains: [        // 允许的API域名
        'heimuer.xyz',
        'ffzy5.tv'
    ]
};
