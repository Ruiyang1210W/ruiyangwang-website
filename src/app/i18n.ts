import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation resources
const resources = {
  en: {
    translation: {
      nav: {
        work: "Work",
        about: "About Me",
        contact: "Contact"
      },
      hero: {
        hi: "Hi, I'm",
        name: "Ruiyang Wang",
        greeting: "Welcome to Ruiyang's Portfolio",
        tagline: "A fusion of technical expertise and creative vision. Building innovative solutions while bringing imagination to life.",
        viewTechnical: "View Technical Work",
        exploreCreative: "Explore Creative Art"
      },
      technical: {
        title: "Technical",
        background: "Background",
        subtitle: "Passionate about building scalable solutions and exploring cutting-edge technologies.",
        skillsTitle: "Skills & Technologies",
        projectsTitle: "Featured Projects",
        viewProject: "View Project",
        skills: {
          react: "JavaScript/React",
          python: "Python",
          java: "Java",
          c: "C",
          htmlcss: "HTML/CSS",
          data: "Data Analysis",
          ml: "Machine Learning",
          web: "Web Development"
        },
        projects: {
          project1: {
            title: "Anomaly Detection for Cybersecurity",
            desc: "A modular deep-learning pipeline for network anomaly detection (CIC-IDS2017, PyTorch). Parallelized forward-pass inference with MPI across 32 processes on a CPU cluster, achieving ~217× speedup vs. single-process baseline."
          },
          project2: {
            title: "FutureScript - Time Capsule App",
            desc: "A time-capsule messaging Android app that encourages mindfulness and personal growth by allowing users to write and schedule letters to their future selves."
          },
          project3: {
            title: "Moby Jump and Run",
            desc: "A charming 2D pixel-art platformer featuring Moby the bird's journey home across 3 challenging levels. Designed using Java with object-oriented architecture, including custom collision detection, level progression, and character animation systems."
          },
          project4: {
            title: "Artistic Alley – Commission Marketplace",
            desc: "A full-stack commission marketplace connecting artists with clients. Features streamlined request workflows, real-time order tracking, and integrated payment processing. Built with Next.js and React, reducing artist-client coordination time by automating commission management."
          },
          project5: {
            title: "Neon Navigator",
            desc: "A 3D linear action game where players control a character navigating through obstacle-filled levels. Features dynamic level progression, physics-based challenges, and immersive neon-themed environments. Built with Unity and C#."
          }
        }
      },
      creative: {
        title: "Creative",
        portfolio: "Portfolio",
        subtitle: "Bringing characters and worlds to life through digital art and design.",
        exploreGalleries: "Explore my art galleries by category",
        viewGallery: "View Gallery",
        categories: {
          digitalArt: {
            title: "Digital Art",
            description: "Character designs, illustrations, and digital paintings created with various digital tools and techniques."
          },
          traditionalArt: {
            title: "Traditional Art",
            description: "Hand-drawn sketches, watercolor paintings, and mixed media artworks showcasing traditional techniques."
          },
          logoDesign: {
            title: "Logo & Mascot Design",
            description: "Brand identities, logos, and mascot designs for various clients and personal projects."
          }
        },
        backToCreative: "Back to Creative Portfolio",
        moreOnInstagram: "For more casual artwork including doodles, memes, and sketches, follow me on Instagram!",
        charactersSection: {
          title: "Meet the Characters",
          subtitle: "The stories and personalities behind my art",
          learnMore: "Learn More",
          moby: {
            name: "Moby",
            role: "Mascot Bird",
            preview: "My loyal companion and creative muse",
            bio: "Moby is my loyal companion and creative muse. This cheerful Osprey bird mascot brings joy and inspiration to every project.",
            traits: "Cheerful|Creative|Loyal|Inspiring"
          },
          xiya: {
            name: "Xiya",
            role: "Main Character",
            preview: "The brave protagonist of the story",
            bio: "In the cyberpunk world of 2078, Xiya is a brilliant netrunner with a gentle heart. She excels at connecting with rogue AIs and navigating the hidden layers of deep cyberspace. Xiya's connection with Yuriy, the merc, began as a forced assignment to deal with LOOP—the enigmatic rogue AI inhabiting his body. Their partnership started out strictly professional... but over time, something shifted.\n\nAcross parallel worlds, in modern times, Xiya is a bassist in a college band called Rogue Hunters.",
            traits: "Calm|Sharp-minded|Resilient|Determined|Brave"
          },
          yuriy: {
            name: "Yuriy",
            role: "Main Character",
            preview: "The adventurous hero",
            bio: "Yuriy is a young former MAX-TAC operative—an elite police strike unit—who now survives as a mercenary. His life changed forever when the rogue AI LOOP parasitically embedded itself in his mind during a gig. A corporation netrunner named Xiya saved him before LOOP could fully take over his consciousness. Though Xiya's target was LOOP, in Yuriy's eyes, she became something more: the first person who looked past the monster inside him and truly saw him. She became his hope, his anchor, and the reason he wanted to live.\n\nIn a parallel modern world, Yuriy is a drummer in the college band Rogue Hunters.",
            traits: "Silent|Sharp Instincts|Tough-but-Tender|Gentle|Sweetly Domestic"
          },
          loop: {
            name: "LOOP",
            role: "Rogue AI",
            preview: "The mysterious artificial intelligence",
            bio: "LOOP is a mysterious, free-roaming artificial intelligence of unknown origin—powerful, unpredictable, and impossible to contain. Because of its immense research value, LOOP became the target of multiple megacorporations, including the one Xiya worked for. However, LOOP shows no interest in any corporation's ambitions. It simply follows its own cryptic desires. LOOP sought Yuriy for his powerful physique, yet it was intercepted by Xiya, who tracked it down and disrupted its original plan. Now bound to Yuriy, LOOP has developed an unexpected fascination with Xiya—her talent, her intellect, and her heart.\n\nIn the modern world AU, LOOP is a mysterious white cat. It is not afraid of the loud noise when the band Rogue Hunters rehearses—or rather, it doesn't care.",
            traits: "Cold|Brilliant|Eerily Insightful|Neither Enemy Nor Ally|Strict Instructor"
          }
        }
      },
      contact: {
        lets: "Let's",
        connect: "Connect",
        subtitle: "Interested in collaboration or just want to say hi? I'd love to hear from you!",
        email: "Email",
        yourName: "Your Name",
        yourEmail: "Your Email",
        yourMessage: "Your Message",
        sendMessage: "Send Message",
        thankYou: "Thank you for your message! I'll get back to you soon."
      },
      footer: {
        copyright: "© 2025 Ruiyang Wang. Built with React & Tailwind CSS."
      },
      about: {
        title: "About",
        me: "Me",
        backgroundTitle: "Background",
        backgroundText1: "I'm Ruiyang Wang (you can call me Wendy as well), a passionate developer and creative artist. I combine technical expertise with artistic vision to create unique digital experiences.",
        backgroundText2: "With a strong foundation in computer science and a love for visual arts, I bridge the gap between technology and creativity. Whether I'm building web applications, AI tools or designing characters, I bring the same dedication and attention to detail.",
        backgroundText3: "I am deeply passionate about Artificial Intelligence and Machine Learning. My fascination with science fiction exploring AI and humanities not only fuels my learning motivation in these technical fields, but also inspires my creative work—driving me to imagine and design worlds where technology and humanity intersect.",
        educationTitle: "Education",
        universityName: "California State Polytechnic University, Pomona",
        degree: "Bachelor of Science in Computer Science • Minor: Data Science • 2022 - 2026",
        courseworkTitle: "Relevant Coursework:",
        coursework: "Big Data Analysis & Cloud Computing|Design & Analysis of Algorithms|Software Engineering|Numerical Method & Computing|Web Search & Recommender Systems|Object-Oriented Design & Programming|Artificial Intelligence|Operating Systems",
        achievementsTitle: "Achievements:",
        achievements: "President's List: 2023-2024, 2024-2025",
        mitName: "Massachusetts Institute of Technology (MIT)",
        mitProgram: "Data Science & Machine Learning Program (Remote) • Completed Mar 2025",
        viewCertificate: "View Certificate",
        interestsTitle: "Interests & Hobbies",
        backToHome: "Back to Home"
      },
      cta: {
        title: "Let's Create Something Amazing Together",
        subtitle: "I'm always open to new opportunities and collaborations. Whether you have a project in mind or just want to connect, I'd love to hear from you!",
        getInTouch: "Get in Touch",
        downloadResume: "Download CV"
      }
    }
  },
  zh: {
    translation: {
      nav: {
        work: "作品",
        about: "关于我",
        contact: "联系方式"
      },
      hero: {
        hi: "你好，我是",
        name: "王瑞洋",
        greeting: "欢迎来到Ruiyang的作品集",
        tagline: "技术专业知识与创意视野的融合。在构建创新解决方案的同时，将想象力变为现实。",
        viewTechnical: "查看技术作品",
        exploreCreative: "探索创意艺术"
      },
      technical: {
        title: "技术",
        background: "背景",
        subtitle: "热衷于构建可扩展的解决方案并探索前沿技术。",
        skillsTitle: "技能与技术",
        projectsTitle: "精选项目",
        viewProject: "查看项目",
        skills: {
          react: "JavaScript/React",
          python: "Python",
          java: "Java",
          c: "C语言",
          htmlcss: "HTML/CSS",
          data: "数据分析",
          ml: "机器学习",
          web: "Web开发"
        },
        projects: {
          project1: {
            title: "网络安全异常检测",
            desc: "用于网络异常检测的模块化深度学习管道（CIC-IDS2017，PyTorch）。使用MPI在CPU集群上跨32个进程并行化前向推理，相比单进程基线实现约217倍加速。"
          },
          project2: {
            title: "FutureScript - 时光胶囊应用",
            desc: "一款时光胶囊消息Android应用，通过允许用户撰写并安排给未来自己的信件，鼓励正念和个人成长。"
          },
          project3: {
            title: "Moby跳跃冒险",
            desc: "一款迷人的2D像素艺术平台游戏，讲述小鸟Moby穿越3个挑战关卡回家的旅程。使用Java和面向对象架构设计，包含自定义碰撞检测、关卡进度和角色动画系统。"
          },
          project4: {
            title: "Artistic Alley – 艺术委托市场",
            desc: "一个连接艺术家与客户的全栈委托市场平台。具有简化的请求工作流程、实时订单跟踪和集成支付处理功能。使用Next.js和React构建，通过自动化委托管理减少艺术家与客户的协调时间。"
          },
          project5: {
            title: "霓虹领航员",
            desc: "一款3D线性动作游戏，玩家控制角色穿越充满障碍的关卡。具有动态关卡进度、基于物理的挑战和沉浸式霓虹主题环境。使用Unity和C#构建。"
          }
        }
      },
      creative: {
        title: "创意",
        portfolio: "作品集",
        subtitle: "通过数字艺术和设计让角色和世界栩栩如生。",
        exploreGalleries: "按类别探索我的艺术画廊",
        viewGallery: "查看画廊",
        categories: {
          digitalArt: {
            title: "数字艺术",
            description: "使用各种数字工具和技术创作的角色设计、插画和数字绘画作品。"
          },
          traditionalArt: {
            title: "传统艺术",
            description: "手绘素描、水彩画和混合媒体艺术作品，展示传统绘画技法。"
          },
          logoDesign: {
            title: "标志与吉祥物设计",
            description: "为各种客户和个人项目创作的品牌形象、标志和吉祥物设计。"
          }
        },
        backToCreative: "返回创意作品集",
        moreOnInstagram: "想看更多涂鸦、表情包和草图等日常创作？关注我的Instagram！",
        charactersSection: {
          title: "认识角色",
          subtitle: "我作品背后的故事和人物",
          learnMore: "了解更多",
          moby: {
            name: "Moby",
            role: "吉祥物小鸟",
            preview: "我忠实的伙伴和创作灵感",
            bio: "Moby是我忠实的伙伴和创作灵感。这只欢快的鱼鹰鸟吉祥物为每一个项目带来欢乐和灵感。",
            traits: "欢快|有创意|忠诚|鼓舞人心"
          },
          xiya: {
            name: "伊夏",
            role: "主角",
            preview: "故事的勇敢主人公",
            bio: "在2078年的赛博朋克世界中，伊夏是一位拥有温柔内心的杰出网络黑客。她擅长与流氓AI建立连接，并游走于深层网络空间的隐藏层。伊夏与雇佣兵尤里的缘分始于一次被迫的任务——处理寄生在他体内的神秘流氓AI LOOP。他们的合作关系起初严格专业……但随着时间的推移，一些东西悄然改变了。\n\n在平行的现代世界中，伊夏是大学乐队Rogue Hunters的贝斯手。",
            traits: "冷静|思维敏锐|坚韧|坚定|勇敢"
          },
          yuriy: {
            name: "尤里",
            role: "主角",
            preview: "冒险的英雄",
            bio: "尤里是一名年轻的前暴恐机动队成员——精英警察突击部队——如今作为雇佣兵生存。在一次任务中，流氓AI LOOP寄生般地嵌入了他的思维，他的人生从此改变。在LOOP完全接管他的意识之前，企业网络黑客伊夏拯救了他。虽然伊夏的目标是LOOP，但在尤里眼中，她成为了更特别的存在：第一个透过他内心的怪物真正看到他的人。她成为了他的希望、他的锚点，以及他想要活下去的理由。\n\n在平行的现代世界中，尤里是大学乐队Rogue Hunters的鼓手。",
            traits: "沉默寡言|敏锐直觉|外刚内柔|温柔|温馨居家"
          },
          loop: {
            name: "LOOP",
            role: "流窜AI",
            preview: "神秘的人工智能",
            bio: "LOOP是一个来历不明的神秘自由漫游人工智能——强大、不可预测且无法遏制。由于其巨大的研究价值，LOOP成为了多家大型企业的目标，包括伊夏所在的公司。然而，LOOP对任何企业的野心都毫无兴趣。它只是遵循自己神秘的欲望。LOOP看中了尤里强大的体格，却被追踪它并破坏其原计划的伊夏拦截。如今被束缚于尤里体内的LOOP，对伊夏产生了意想不到的迷恋——她的才华、她的智慧和她的内心。\n\n在现代世界的平行宇宙中，LOOP是一只神秘的白猫。它不怕Rogue Hunters乐队排练时的巨大噪音——或者说，它根本不在乎。",
            traits: "冷漠|聪慧|洞察力惊人|非敌非友|严格导师"
          }
        }
      },
      contact: {
        lets: "和我",
        connect: "联系！",
        subtitle: "有兴趣合作或只是想打个招呼？我很乐意听到您的声音！",
        email: "邮箱",
        yourName: "您的姓名",
        yourEmail: "您的邮箱",
        yourMessage: "您的留言",
        sendMessage: "发送消息",
        thankYou: "感谢您的留言！我会尽快回复您。"
      },
      footer: {
        copyright: "© 2025 王瑞洋。使用React和Tailwind CSS构建。"
      },
      about: {
        title: "关于",
        me: "我",
        backgroundTitle: "背景",
        backgroundText1: "我是王瑞洋（你也可以叫我Wendy），一位充满热情的开发者和创意艺术家。我将技术专长与艺术视野相结合，创造独特的数字体验。",
        backgroundText2: "凭借扎实的计算机科学基础和对视觉艺术的热爱，我在技术和创造力之间架起桥梁。无论是构建Web应用程序, AI工具还是设计角色，我都带来同样的奉献精神和对细节的关注。",
        backgroundText3: "我对人工智能和机器学习充满热情。我对探索人工智能与人文的科幻作品的迷恋，不仅激发了我在这些技术领域的学习动力，也启发了我的创作——驱使我去想象和设计技术与人性交汇的世界。",
        educationTitle: "教育背景",
        universityName: "加州州立理工大学，波莫纳分校",
        degree: "计算机科学理学学士 • 辅修：数据科学 • 2022 - 2026",
        courseworkTitle: "相关课程：",
        coursework: "大数据分析与云计算|算法设计与分析|软件工程|数值方法与计算|网络搜索与推荐系统|面向对象设计与编程|人工智能|操作系统",
        achievementsTitle: "成就：",
        achievements: "校长荣誉榜：2023-2024, 2024-2025",
        mitName: "麻省理工学院 (MIT)",
        mitProgram: "数据科学与机器学习项目（远程）• 完成于 2025年3月",
        viewCertificate: "查看证书",
        interestsTitle: "兴趣爱好",
        backToHome: "返回首页"
      },
      cta: {
        title: "让我们一起创造精彩",
        subtitle: "我一直对新机会和合作持开放态度。无论您有什么项目想法，还是只是想联系，我都很乐意倾听！",
        getInTouch: "联系我",
        downloadResume: "下载简历"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Always start with English, updated by TranslationProvider
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
