import 'bulma/css/bulma.css';
import '../styles/style.css';
import {Student} from "./student";
import {Controller} from "./controller";
import {BookList} from "./booklist";

window.onload = function () {

    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }

    const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));

    let opt = {
        startButton:document.getElementById('startButton'),
        searchButton:document.getElementById('searchButton')
    };
    new Controller(opt);

    let book = [{
        name : '西游记',
        tag : '古典',
        alt : '西游记',
        src : images['xiyouji.jpeg'],
        text : '《西游记》是中国古典神魔小说中的巅峰之作，书中讲述了唐僧师徒四人一路降妖伏魔，历经整整九九八十一难取经的故事。作者细腻而深刻地塑造了四个极其经典的形象：慈悲、宽厚但软弱、迂腐的师父唐僧；富有反叛精神、神通广大的孙悟空；自私狡猾、好吃懒做的猪八戒；任劳任怨、忠心耿耿的沙僧……他们怀着不同的目的走上了同一条取经路，面对各种难以想象的妖魔鬼怪、险恶绝境，他们既有矛盾，又有合作与情谊。\n' +
            '《西游记》作者吴承恩丰富的知识与惊人的想象力、非同一般的幽默感和妙笔生花的高超写作技巧，相信会令每位朋友都获益匪浅，从中取得人生路途中的“真经”。'
    },{
        name : '古武战魂',
        tag : '玄幻',
        alt : '古武战魂',
        src : images['guwuzhanhun.jpg'],
        text : '神，世界上真的有吗？这是一个谜，是未揭之谜。当上古的战鼓，在都市上空敲响的时候。延续万年的战乱，再一次降临这个，被九界称为“神之起源”的星球时，神话不再是神话。神龙星，众生界中亿万颗星体的一员。“是人创造了神，还是神创造了人”。在书中都一一演绎出。'
    },{
        name : '宇宙魔方',
        tag : '科技',
        alt : '宇宙魔方',
        src : images['yuzhoumofang.jpg'],
        text : '宇宙魔方是空间原石的容器，别名为无限立方。拥有着空间之力，可以打开空间之门，传送大量的武器资源到任何地方。在电影《复仇者联盟3·无限战争》中被灭霸捏碎成为空间宝石。'
    },{
        name : '水浒传',
        tag : '古典',
        alt : '水浒传',
        src : images['shuihuzhuan.jpg'],
        text : '天下瘟疫流行，官府无道，官逼民反。在梁山泊聚集起来自江湖上的许多英雄好汉，打州劫府、济困扶贫、严重动摇了北宋朝廷的统治，但宋江对朝廷的投降导致了梁山农民起义最终走向失败的悲惨结局。'
    },{
        name : '红楼梦',
        tag : '古典',
        alt : '红楼梦',
        src : images['hongloumeng.jpg'],
        text : '《红楼梦》，中国古代章回体长篇小说，又名《石头记》等，被列为中国古典四大名著之首，一般认为是清代作家曹雪芹所著。小说以贾、史、王、薛四大家族的兴衰为背景，以富贵公子贾宝玉为视角，描绘了一批举止见识出于须眉之上的闺阁佳人的人生百态，展现了真正的人性美和悲剧美，可以说是一部从各个角度展现女性美的史诗。'
    },{
        name : '三国演义',
        tag : '古典',
        alt : '三国演义',
        src : images['sanguoyanyi.jpg'],
        text : '《三国演义》描写了从东汉末年到西晋初年之间近百年的历史风云，以描写战争为主，诉说了东汉末年的群雄割据混战和魏、蜀、吴三国之间的政治和军事斗争，最终司马炎一统三国，建立晋朝的故事。反映了三国时代各类社会斗争与矛盾的转化，并概括了这一时代的历史巨变，塑造了一群叱咤风云的三国英雄人物。'
    },{
        name : '三体',
        tag : '科幻',
        alt : '三体',
        src : images['santi.jpg'],
        text : '《三体》是刘慈欣创作的系列长篇科幻小说，由《三体》、《三体Ⅱ·黑暗森林》、《三体Ⅲ·死神永生》组成，第一部于2006年5月起在《科幻世界》杂志上连载，第二部于2008年5月首次出版，第三部则于2010年11月出版。'
    },{
        name : '十万个为什么',
        tag : '儿童',
        alt : '十万个为什么',
        src : images['shiwange.jpg'],
        text : '《十万个为什么》是少年儿童出版社在20世纪60年代初编辑出版的一套青少年科普读物，最新版本是第六版，第六版总主编是韩启德。50年来，这套书先后出版了6个版本，累计发行量超过1亿册，是新中国几代青少年的科学启蒙读物，已经成为中国原创科普图书的第一品牌。它在传播知识、普及科学方面发挥了积极的作用，影响几代青少年走上了科学的道路。受其影响，冠以“十万个为什么”的图书层出不穷，成为少儿科普类图书的代名词。'
    }];
    new BookList(book);
};