const CUSTOMER_SITES = {
    liangzi: {
        api: 'https://cj.lziapi.com/api.php/provide/vod',
        name: '量子高清',
    },
    feifan: {
        api: 'https://api.ffzyapi.com/api.php/provide/vod',
        name: '非凡专线',
    },
    baofeng: {
        api: 'https://bfzyapi.com/api.php/provide/vod',
        name: '暴风影视',
    },
    suoni: {
        api: 'https://suoniapi.com/api.php/provide/vod',
        name: '索尼资源',
    },
    jisu: {
        api: 'https://jszyapi.com/api.php/provide/vod',
        name: '极速快线',
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error('错误：请先加载 config.js！');
}
