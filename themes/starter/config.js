/**
 * 另一个落地页主题
 */
const CONFIG = {
  // 默认只展示Logo文字，如果设置了logo图片，会在文字左侧显示图标
  STARTER_LOGO: '', // 普通logo图片 示例：/images/starter/logo/logo.svg
  STARTER_LOGO_WHITE: '', // 透明底浅色logo 示例： /images/starter/logo/logo-white.svg

  // MENU ， 菜单部分不在此处配置，请在Notion数据库中添加MENU

  // 英雄区块导航
  STARTER_HERO_ENABLE: true, // 开启英雄区
  STARTER_HERO_TITLE_1: 'The Path to AGI', // 英雄区文字
  STARTER_HERO_TITLE_2: 'Skin in the Game', // 英雄区文字
  // 英雄区两个按钮，如果TEXT留空则隐藏按钮
  STARTER_HERO_BUTTON_1_TEXT: 'Linkedin', // 英雄区按钮
  STARTER_HERO_BUTTON_1_URL: 'https://www.linkedin.com/in/mingkunzheng', // 英雄区按钮
  STARTER_HERO_BUTTON_2_TEXT: 'Subscribe on YouTube', // 英雄区按钮
  STARTER_HERO_BUTTON_2_URL: 'https://www.youtube.com/@AAA_Lab', // 英雄区按钮
  STARTER_HERO_BUTTON_2_ICON: '/images/starter/youtube.svg', // 英雄区按钮2的图标，不需要则留空

  // 英雄区配图，如需隐藏，改为空值即可 ''
  STARTER_HERO_PREVIEW_IMAGE: '/images/starter/hero/hero-agi-image2.png', // 产品预览图 ，默认读取public目录下图片
  STARTER_HERO_BANNER_IMAGE: '', // hero区下方的全宽图

  // 顶部右侧导航暗流
  STARTER_NAV_BUTTON_1_TEXT: 'Dont click me',
  STARTER_NAV_BUTTON_1_URL: '/archive',

  STARTER_NAV_BUTTON_2_TEXT: 'Click me!',
  STARTER_NAV_BUTTON_2_URL: '/',

  // 特性区块
  STARTER_FEATURE_ENABLE: true, // 特性区块开关
  STARTER_FEATURE_TITLE: 'How to Get Started?​​', // 特性
  STARTER_FEATURE_TEXT_1: '4 Paths to AGI', // 特性
  STARTER_FEATURE_TEXT_2:
    'AI works for you—you’re in the driver’s seat. You may steer a great car, but your grit outpaces the machine.', // 特性

  STARTER_FEATURE_1_TITLE_1: 'AGI', // 特性1
  STARTER_FEATURE_1_TEXT_1: 'Humanity’s dream roommate—masters every task, never steals your coffee', // 特性1
  STARTER_FEATURE_1_BUTTON_TEXT: 'Learn more', // 特性1
  STARTER_FEATURE_1_BUTTON_URL: '/tag/AGI', // 特性1

  STARTER_FEATURE_2_TITLE_1: 'AI Agent', // 特性2
  STARTER_FEATURE_2_TEXT_1: 'An invisible intern that automates chores and never asks for pay', // 特性2
  STARTER_FEATURE_2_BUTTON_TEXT: 'Learn more', // 特性2
  STARTER_FEATURE_2_BUTTON_URL: '/tag/AI%20Agent', // 特性2

  STARTER_FEATURE_3_TITLE_1: 'AI Art', // 特性3
  STARTER_FEATURE_3_TEXT_1: 'Code-wielding Picasso: zero paint, unlimited pixels, instant gallery', // 特性3
  STARTER_FEATURE_3_BUTTON_TEXT: 'Learn more', // 特性3
  STARTER_FEATURE_3_BUTTON_URL: '/tag/AI%20Art', // 特性3

  STARTER_FEATURE_4_TITLE_1: 'Smart Home', // 特性4
  STARTER_FEATURE_4_TEXT_1: 'A wise-cracking Wi-Fi butler that nags, then kills the lights before you can say “Ohm', // 特性4
  STARTER_FEATURE_4_BUTTON_TEXT: 'Learn more', // 特性4
  STARTER_FEATURE_4_BUTTON_URL: '/tag/Smart%20Home', // 特性4

  // 首页ABOUT区块
  STARTER_ABOUT_ENABLE: true, // ABOUT区块开关
  STARTER_ABOUT_TITLE: 'Welcome to the Stealing Fire Knowledge Hub!',
  STARTER_ABOUT_TEXT: 'Here you will find a continuously updated learning path covering AI and smart home technologies — from key terms to real-world applications. More importantly, we hope it sparks a deeper question: <br /> <br /> “What can I do with AI to empower myself?”',
  STARTER_ABOUT_BUTTON_TEXT: 'Learn more',
  STARTER_ABOUT_BUTTON_URL: 'https://stealingfire.cc/archive',
  STARTER_ABOUT_IMAGE_1: '/images/starter/about/about-image-01.jpg',
  STARTER_ABOUT_IMAGE_2: '/images/starter/about/about-image-02.jpg',
  STARTER_ABOUT_TIPS_1: 'Join us',
  STARTER_ABOUT_TIPS_2: 'Keep moving forward',
  STARTER_ABOUT_TIPS_3: 'Together with the pioneers',

  // 首页价格区块
  STARTER_PRICING_ENABLE: true, // 价格区块开关
  STARTER_PRICING_TITLE: 'Sponsor',
  STARTER_PRICING_TEXT_1: 'Buy me a coffee ☕',
  STARTER_PRICING_TEXT_2:
    'all the content here is completely free. Buying me a coffee is just a way to show support — and you will have my heartfelt thanks!）',

  STARTER_PRICING_1_TITLE: 'Cheappuccino',
  STARTER_PRICING_1_PRICE: '1.90',
  STARTER_PRICING_1_PRICE_CURRENCY: '$',
  STARTER_PRICING_1_PRICE_PERIOD: 'cup',
  STARTER_PRICING_1_HEADER: '7-Eleven',
  STARTER_PRICING_1_FEATURES: 'Nods in thanks,Cheers!', // 英文逗号隔开
  STARTER_PRICING_1_BUTTON_TEXT: 'Buy it',
  STARTER_PRICING_1_BUTTON_URL:
    'https://tangly1024.lemonsqueezy.com/checkout/buy/c1a38a65-362e-44c5-8065-733fee39eb54',

  STARTER_PRICING_2_TAG: '​​Recommended',
  STARTER_PRICING_2_TITLE: 'Pumpkin Spice Latte',
  STARTER_PRICING_2_PRICE: '3.50',
  STARTER_PRICING_2_PRICE_CURRENCY: '$',
  STARTER_PRICING_2_PRICE_PERIOD: 'cup',
  STARTER_PRICING_2_HEADER: 'Starbucks',
  STARTER_PRICING_2_FEATURES: 'Bows deeply in gratitude,Much obliged', // 英文逗号隔开
  STARTER_PRICING_2_BUTTON_TEXT: 'Just buy it',
  STARTER_PRICING_2_BUTTON_URL:
    'https://tangly1024.lemonsqueezy.com/checkout/buy/590ad70a-c3b7-4caf-94ec-9ca27bde06d4',

  STARTER_PRICING_3_TITLE: '​​Bubble tea',
  STARTER_PRICING_3_PRICE: '7.90',
  STARTER_PRICING_3_PRICE_CURRENCY: '$',
  STARTER_PRICING_3_PRICE_PERIOD: 'cup',
  STARTER_PRICING_3_HEADER: 'The Alley',
  STARTER_PRICING_3_FEATURES: 'Slides to my knees in gratitude,Forever grateful', // 英文逗号隔开
  STARTER_PRICING_3_BUTTON_TEXT: 'Go for it',
  STARTER_PRICING_3_BUTTON_URL:
    'https://tangly1024.lemonsqueezy.com/checkout/buy/df924d66-09dc-42a4-a632-a6b0c5cc4f28',

  // 首页用户测评区块
  STARTER_TESTIMONIALS_ENABLE: true, // 测评区块开关
  STARTER_TESTIMONIALS_TITLE: 'Feedback',
  STARTER_TESTIMONIALS_TEXT_1: '我们的用户怎么说',
  STARTER_TESTIMONIALS_TEXT_2:
    '数千位站长选择用NotionNext搭建他们的网站,通过帮助手册、交流社群以及技术咨询，大家成功上线了自己的网站',
  STARTER_TESTIMONIALS_STAR_ICON: '/images/starter/testimonials/icon-star.svg', // 评分图标

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  STARTER_TESTIMONIALS_ITEMS: [
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '感谢大佬的方法。之前尝试过Super、Potion等国外的第三方平台，实现效果一般，个性化程度远不如这个方法，已经用起来了！ ',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F22de3fcb-d90d-4271-bc01-f815f476122b%2F4FE0A0C0-E487-4C74-BF8E-6F01A27461B8-14186-000008094BC289A6.jpg?table=collection&id=a320a2cc-6ebe-4a8d-95cc-ea94e63bced9&width=200',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Ryan_G',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'Ryan`Log 站长',
      STARTER_TESTIMONIALS_ITEM_URL: 'https://blog.gaoran.xyz/'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '很喜欢这个主题，本代码小白用三天台风假期搭建出来了，还根据大佬的教程弄了自定义域名，十分感谢，已请喝咖啡~',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0d33d169-f932-41ff-ac6b-88a923c08e02%2F%25E5%25A4%25B4%25E5%2583%258F.jfif?table=collection&id=7787658d-d5c0-4f34-8e32-60c523dfaba3&width=400',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Asenkits',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '阿森的百宝袋 站长',
      STARTER_TESTIMONIALS_ITEM_URL: 'https://asenkits.top/'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '呜呜呜，经过一个下午的努力，终于把博客部署好啦，非常感谢Tangly1024大佬的框架和教程，这是我有生之年用过的最好用的博客框架┭┮﹏┭┮。从今之后，我就可以在自己的博客里bb啦，( •̀ ω •́ )y ',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F6c096b44-beb9-48ee-8f92-1efdde47f3a3%2F338962f1-d352-49c7-9a1b-746e35a7005c%2Fhf.png?table=block&id=ce5a48a9-d77a-4843-a3d9-a78cd4f794ce&spaceId=6c096b44-beb9-48ee-8f92-1efdde47f3a3&width=100&userId=27074aef-7216-41ed-baef-d9b53addd870&cache=v2',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'DWIND',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '且听风吟 站长',
      STARTER_TESTIMONIALS_ITEM_URL: 'https://www.dwind.top/'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '感谢提供这么好的项目哈哈 之前一直不知道怎么部署(别的项目好难好复杂)这个相对非常简单 新手非常友好哦',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd52f6766-3e32-4c3d-8529-46e1f214360f%2Ffavicon.svg?table=collection&id=7d76aad5-a2c4-4d9a-887c-c7913fae4eed&width=400',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: '迪升disheng ',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'AI资源分享 Blog',
      STARTER_TESTIMONIALS_ITEM_URL: 'https://blog.disheng.org/'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '灰常感谢大佬的博客项目，能将博客和notion结合起来，这一直是我挺期待的博客模式。',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fafb21381-f51b-4fd0-9998-800dbeb64dbe%2Favatar.png?table=block&id=195935d2-0d8d-49fc-bd81-1db42ee50840&spaceId=6c096b44-beb9-48ee-8f92-1efdde47f3a3&width=100&userId=27074aef-7216-41ed-baef-d9b53addd870&cache=v2',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'AnJhon',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'Anjhon`s Blog 站长',
      STARTER_TESTIMONIALS_ITEM_URL: 'https://www.anjhon.top'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT: '用好久了，太感谢了',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe4f391d7-7d65-4c05-a82c-c6e2c40f06e4%2Fa2a7641a26b367608c6ef28ce9b7e983_(2).png?table=block&id=a386eb0e-4c07-4b18-9ece-bba4e79ce21c&spaceId=6c096b44-beb9-48ee-8f92-1efdde47f3a3&width=100&userId=27074aef-7216-41ed-baef-d9b53addd870&cache=v2',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'LUCEN',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'LUCEN考验辅导 站长',
      STARTER_TESTIMONIALS_ITEM_URL: 'https://www.lucenczz.top/'
    }
  ],

  //   FAQ 常见问题模块
  STARTER_FAQ_ENABLE: true, // 常见问题模块开关
  STARTER_FAQ_TITLE: '常见问题解答',
  STARTER_FAQ_TEXT_1: '有任何问题吗？请看这里',
  STARTER_FAQ_TEXT_2: '我们收集了常见的用户疑问',

  STARTER_FAQ_1_QUESTION: 'NotionNext有帮助文档吗？',
  STARTER_FAQ_1_ANSWER:
    'NotionNext提供了<a href="https://docs.tangly1024.com/about" className="underline">帮助文档</a>，操作<a href="https://www.bilibili.com/video/BV1fM4y1L7Qi/" className="underline">演示视频</a>，以及<a href="https://docs.tangly1024.com/article/chat-community" className="underline">交流社群</a>来协助您完成网站的搭建部署',

  STARTER_FAQ_2_QUESTION: '部署后要如何编写文章？',
  STARTER_FAQ_2_ANSWER:
    '您可以在Notion中之间添加或修改类型为Post的页面，内容将被实时同步在站点中，详情参考<a className="underline" href="https://docs.tangly1024.com/article/start-to-write">《帮助文档》</a>',

  STARTER_FAQ_3_QUESTION: '站点部署失败，更新失败？',
  STARTER_FAQ_3_ANSWER:
    '通常是配置修改错误导致，请检查配置或者重试操作步骤，或者通过Vercel后台的Deployments中找到错误日志，并向网友求助',

  STARTER_FAQ_4_QUESTION: '文章没有实时同步？',
  STARTER_FAQ_4_ANSWER:
    '先检查Notion_Page_ID是否正确配置，其次由于博客的每个页面都有独立缓存，刷新网页后即可解决',

  // 团队成员区块
  STARTER_TEAM_ENABLE: true, // 团队成员区块开关
  STARTER_TEAM_TITLE: 'Team',
  STARTER_TEAM_TEXT_1: 'A huge, massive team',
  STARTER_TEAM_TEXT_2:
    'Thanks to every AI enthusiast and Smart Home lover out <a className="underline" href="https://stealingfire.cc">there!</a>',

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  STARTER_TEAM_ITEMS: [
    {
      STARTER_TEAM_ITEM_AVATAR:
        '/images/starter/team/team-mk (1).png',
      STARTER_TEAM_ITEM_NICKNAME: 'MK',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Developer'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-mk (3).png',
      STARTER_TEAM_ITEM_NICKNAME: 'MK',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Marketing Expert'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-mk (4).png',
      STARTER_TEAM_ITEM_NICKNAME: 'MK',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Digital Marketer'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-mk (2).png',
      STARTER_TEAM_ITEM_NICKNAME: 'MK',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Creative Designer'
    }
  ],

  // 博客文章区块
  STARTER_BLOG_ENABLE: true, // 首页博文区块开关
  STARTER_BLOG_TITLE: 'My blog',
  STARTER_BLOG_COUNT: 3, // 首页博文区块默认展示前3篇文章
  STARTER_BLOG_TEXT_1: 'Latest article',
  STARTER_BLOG_TEXT_2:
    'The latest updates on the path to AGI and Smart Home',

  // 联系模块
  STARTER_CONTACT_ENABLE: true, // 联系模块开关
  STARTER_CONTACT_TITLE: 'Contact me',
  STARTER_CONTACT_TEXT: 'Tell me about the problem you are experiencing',
  STARTER_CONTACT_LOCATION_TITLE: 'My location',
  STARTER_CONTACT_LOCATION_TEXT: 'Shenzhen, Guangdong, China',
  STARTER_CONTACT_EMAIL_TITLE: 'How can I help you?',
  STARTER_CONTACT_EMAIL_TEXT: 'dukkha.mk@gmail.com',

  // 嵌入外部表单
  STARTER_CONTACT_MSG_EXTERNAL_URL: 'https://noteforms.com/forms/yfctc7', // 基于NoteForm创建，将留言数据存在Notion中
  //   自定义留言表单，以下几个配置暂时废弃
  //   STARTER_CONTACT_MSG_TITLE: '向我们留言',
  //   STARTER_CONTACT_MSG_NAME: '姓名',
  //   STARTER_CONTACT_MSG_EMAIL: '邮箱地址',
  //   STARTER_CONTACT_MSG_PHONE: '联系电话',
  //   STARTER_CONTACT_MSG_TEXT: '消息内容',
  //   STARTER_CONTACT_MSG_SEND: '发送消息',
  //   STARTER_CONTACT_MSG_THANKS: '感谢您的留言',

  // 合作伙伴的图标
  STARTER_BRANDS_ENABLE: true, // 合作伙伴开关
  STARTER_BRANDS: [
    {
      IMAGE: '/images/starter/brands/graygrids.svg',
      IMAGE_WHITE: '/images/starter/brands/graygrids-white.svg',
      URL: 'https://graygrids.com/',
      TITLE: 'graygrids'
    },
    {
      IMAGE: '/images/starter/brands/lineicons.svg',
      IMAGE_WHITE: '/images/starter/brands/lineicons-white.svg',
      URL: 'https://lineicons.com/',
      TITLE: 'lineicons'
    },
    {
      IMAGE: '/images/starter/brands/uideck.svg',
      IMAGE_WHITE: '/images/starter/brands/uideck-white.svg',
      URL: 'https://uideck.com/',
      TITLE: 'uideck'
    },
    {
      IMAGE: '/images/starter/brands/ayroui.svg',
      IMAGE_WHITE: '/images/starter/brands/ayroui-white.svg',
      URL: 'https://ayroui.com/',
      TITLE: 'ayroui'
    },
    {
      IMAGE: '/images/starter/brands/tailgrids.svg',
      IMAGE_WHITE: '/images/starter/brands/tailgrids-white.svg',
      URL: '"https://tailgrids.com/',
      TITLE: 'tailgrids'
    }
  ],

  STARTER_FOOTER_SLOGAN: 'Empowering you through the power of AI.',

  // 页脚三列菜单组
  STARTER_FOOTER_LINK_GROUP: [
    {
      TITLE: 'About Us',
      LINK_GROUP: [
        { TITLE: 'Home', URL: '/#home' },
        {
          TITLE: 'linkedin',
          URL: 'http://www.linkedin.com/in/mingkunzheng'
        }
      ]
    },
    {
      TITLE: 'Blog',
      LINK_GROUP: [
        {
          TITLE: 'The Path to AGI',
          URL: 'https://stealingfire.cc/category/The%20Path%20to%20AGI'
        },
        {
          TITLE: 'AI Art',
          URL: 'https://stealingfire.cc/category/AI%20Art'
        },
        {
          TITLE: 'Smart Home',
          URL: 'https://stealingfire.cc/category/Smart%20Home'
        },
      ]
    },
    {
      TITLE: 'Youtube',
      LINK_GROUP: [
        {
          TITLE: 'Alpha Alpaca AI Lab',
          URL: 'https://www.youtube.com/@AAA_Lab'
        },
        {
          TITLE: 'AAA_Lab',
          URL: 'https://www.youtube.com/@AAA_Lab'
        },
      ]
    }
  ],

  STARTER_FOOTER_BLOG_LATEST_TITLE: 'Latest article',

  STARTER_FOOTER_PRIVACY_POLICY_TEXT: 'Privacy Policy',
  STARTER_FOOTER_PRIVACY_POLICY_URL: '/privacy-policy',

  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_TEXT: 'Legal Notice',
  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_URL: '/legacy-notice',

  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_TEXT: 'Service Agreement',
  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_URL: '/terms-of-use',

  // 404页面的提示语
  STARTER_404_TITLE: 'We can not seem to find your page.',
  STARTER_404_TEXT: 'Sorry! The page you are looking for does not exist. It may have been moved or deleted.',
  STARTER_404_BACK: 'Back to home',

  // 页面底部的行动呼吁模块
  STARTER_CTA_ENABLE: true,
  STARTER_CTA_TITLE: 'So, what are you waiting for?',
  STARTER_CTA_TITLE_2: 'Let us get started',
  STARTER_CTA_DESCRIPTION:
    'Start with any article',
  STARTER_CTA_BUTTON: true, // 是否显示按钮
  STARTER_CTA_BUTTON_URL: 'https://stealingfire.cc',
  STARTER_CTA_BUTTON_TEXT: 'Get started',

  STARTER_POST_REDIRECT_ENABLE: true, // 默認開啟重定向
  STARTER_POST_REDIRECT_URL: 'https://stealingfire.cc', // 重定向域名
  STARTER_NEWSLETTER: process.env.NEXT_PUBLIC_THEME_STARTER_NEWSLETTER || false // 是否开启邮件订阅 请先配置mailchimp功能 https://docs.tangly1024.com/article/notion-next-mailchimp
}
export default CONFIG
