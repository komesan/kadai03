// alert(1111);

// $("#audio_opening").get(0).play();

// じぶんのグーの変数
let imgs_my_gu = ['cat01.png', 'cat02.png', 'cat03.png', 'cat04.jpeg', 'cat05.jpeg', 'cat06.png', 'cat07.jpeg', 'cat08.jpeg', 'cat09.jpeg', 'cat10.jpeg',];  // 画像ファイル名
let index_my_gu = 0;  // インデックス番号
$('.select_mycat_gu').attr('src', 'img/' + imgs_my_gu[index_my_gu]);

// じぶんのチョキの変数
let imgs_my_cho = ['cat01.png', 'cat02.png', 'cat03.png', 'cat04.jpeg', 'cat05.jpeg', 'cat06.png', 'cat07.jpeg', 'cat08.jpeg', 'cat09.jpeg', 'cat10.jpeg',];  // 画像ファイル名
let index_my_cho = 0;  // インデックス番号
$('.select_mycat_cho').attr('src', 'img/' + imgs_my_cho[index_my_cho]);

// じぶんのパーの変数
let imgs_my_par = ['cat01.png', 'cat02.png', 'cat03.png', 'cat04.jpeg', 'cat05.jpeg', 'cat06.png', 'cat07.jpeg', 'cat08.jpeg', 'cat09.jpeg', 'cat10.jpeg',];  // 画像ファイル名
let index_my_par = 0;  // インデックス番号
$('.select_mycat_par').attr('src', 'img/' + imgs_my_par[index_my_par]);

// テキのグーの変数
let imgs_ene_gu = ['enemy01.jpeg', 'enemy02.jpeg', 'enemy03.jpeg', 'enemy04.jpeg', 'enemy05.jpeg', 'enemy06.jpeg', 'enemy07.jpeg', 'enemy08.jpeg', 'enemy09.jpeg', 'enemy10.jpeg',];  // 画像ファイル名
let index_ene_gu = 0;  // インデックス番号
$('.select_enemy_gu').attr('src', 'img/' + imgs_ene_gu[index_ene_gu]);

// テキのチョキの変数
let imgs_ene_cho = ['enemy01.jpeg', 'enemy02.jpeg', 'enemy03.jpeg', 'enemy04.jpeg', 'enemy05.jpeg', 'enemy06.jpeg', 'enemy07.jpeg', 'enemy08.jpeg', 'enemy09.jpeg', 'enemy10.jpeg',];  // 画像ファイル名
let index_ene_cho = 0;  // インデックス番号
$('.select_enemy_cho').attr('src', 'img/' + imgs_ene_cho[index_ene_cho]);

// テキのパーの変数
let imgs_ene_par = ['enemy01.jpeg', 'enemy02.jpeg', 'enemy03.jpeg', 'enemy04.jpeg', 'enemy05.jpeg', 'enemy06.jpeg', 'enemy07.jpeg', 'enemy08.jpeg', 'enemy09.jpeg', 'enemy10.jpeg',];  // 画像ファイル名
let index_ene_par = 0;  // インデックス番号
$('.select_enemy_par').attr('src', 'img/' + imgs_ene_par[index_ene_par]);


// 最初に宣言してハコを作る
let start_btn = "";
let select_enemy = "";
let judgment = "";
let win_count_mycat = 0;
let win_item_mycat = 0;
let win_count_enemy = 0;
let win_item_enemy = 0;
let icon_on = function() {
        $(".mycat_gu").fadeTo("fast",1);
        $(".select_mycat_gu").fadeTo("fast",1);
        $(".mycat_cho").fadeTo("fast",1);
        $(".select_mycat_cho").fadeTo("fast",1);
        $(".mycat_par").fadeTo("fast",1);
        $(".select_mycat_par").fadeTo("fast",1);
        $(".enemy_gu").fadeTo("fast",1);
        $(".select_enemy_gu").fadeTo("fast",1);
        $(".enemy_cho").fadeTo("fast",1);
        $(".select_enemy_cho").fadeTo("fast",1);
        $(".enemy_par").fadeTo("fast",1);
        $(".select_enemy_par").fadeTo("fast",1);
}
// ランダムでネコをセレクトする
let random_cat = function() {
    index_my_gu = 1 + Math.floor(Math.random() * 10);
    $('.select_mycat_gu').attr('src', 'img/' + imgs_my_gu[index_my_gu]);
    index_my_cho = 1 + Math.floor(Math.random() * 10);
    $('.select_mycat_cho').attr('src', 'img/' + imgs_my_cho[index_my_cho]);
    index_my_par = 1 + Math.floor(Math.random() * 10);
    $('.select_mycat_par').attr('src', 'img/' + imgs_my_par[index_my_par]);
    index_ene_gu = 1 + Math.floor(Math.random() * 10);
    $('.select_enemy_gu').attr('src', 'img/' + imgs_ene_gu[index_ene_gu]);
    index_ene_cho = 1 + Math.floor(Math.random() * 10);
    $('.select_enemy_cho').attr('src', 'img/' + imgs_ene_cho[index_ene_cho]);
    index_ene_par = 1 + Math.floor(Math.random() * 10);
    $('.select_enemy_par').attr('src', 'img/' + imgs_ene_par[index_ene_par]);
}

let audio_opening = document.querySelector(".audio_opening");
let audio_gamestart = document.querySelector(".audio_gamestart");
let audio_atari = document.querySelector(".audio_atari");
let audio_bgm = document.querySelector(".audio_bgm");

// winしたネコの画像を指定する
let item_get_mycat =function() {
    if (win_count_mycat === 1) {
        $(".attack_mycat_1").attr('src', win_item_mycat);
    }else if (win_count_mycat === 2) {
        $(".attack_mycat_2").attr('src', win_item_mycat);
    }else if (win_count_mycat === 3) {
        $(".attack_mycat_3").attr('src', win_item_mycat);
    }else if (win_count_mycat === 4) {
        $(".attack_mycat_4").attr('src', win_item_mycat);
    }else if (win_count_mycat === 5) {
        $(".attack_mycat_5").attr('src', win_item_mycat);
    }else if (win_count_mycat === 6) {
        $(".attack_mycat_6").attr('src', win_item_mycat);
    }else if (win_count_mycat === 7) {
        $(".attack_mycat_7").attr('src', win_item_mycat);
    }else if (win_count_mycat === 8) {
        $(".attack_mycat_8").attr('src', win_item_mycat);
    }
}
// 敵がwinしたネコの画像を指定する
let item_get_enemy =function() {
    if (win_count_enemy === 1) {
        $(".attack_enemy_1").attr('src', win_item_enemy);
    }else if (win_count_enemy === 2) {
        $(".attack_enemy_2").attr('src', win_item_enemy);
    }else if (win_count_enemy === 3) {
        $(".attack_enemy_3").attr('src', win_item_enemy);
    }else if (win_count_enemy === 4) {
        $(".attack_enemy_4").attr('src', win_item_enemy);
    }else if (win_count_enemy === 5) {
        $(".attack_enemy_5").attr('src', win_item_enemy);
    }else if (win_count_enemy === 6) {
        $(".attack_enemy_6").attr('src', win_item_enemy);
    }else if (win_count_enemy === 7) {
        $(".attack_enemy_7").attr('src', win_item_enemy);
    }else if (win_count_enemy === 8) {
        $(".attack_enemy_8").attr('src', win_item_enemy);
    }
}


// let select_mycat_gu = "";
// let select_mycat_cho = "";
// let select_mycat_par = "";

// let select_enemy_gu = "";
// let select_enemy_cho = "";
// let select_enemy_par = "";

// let attack_mycat_1 = "";
// let attack_mycat_2 = "";
// let attack_mycat_3 = "";
// let attack_mycat_4 = "";
// let attack_mycat_5 = "";
// let attack_mycat_6 = "";
// let attack_mycat_7 = "";
// let attack_mycat_8 = "";

// let attack_enemy_1 = "";
// let attack_enemy_2 = "";
// let attack_enemy_3 = "";
// let attack_enemy_4 = "";
// let attack_enemy_5 = "";
// let attack_enemy_6 = "";
// let attack_enemy_7 = "";
// let attack_enemy_8 = "";


// スタートボタンを押す
$(".header_start_btn").on('click' , function(){
    if (start_btn === "go") {
    alert("もうスタートしてますよ〜");        
    }else{
    start_btn = "go";
    console.log(start_btn);
    $(".audio_gamestart").get(0).play();
    $(".audio_bgm").get(0).play();
    audio_bgm.addEventListener("ended", function() {
    $(".audio_bgm").get(0).play();
    });
    alert("ゲームスタート!!");
    setTimeout(random_cat, 1000);
    console.log(index_my_gu, index_my_cho, index_my_par, index_ene_gu, index_ene_cho, index_ene_par);
    }
});

// じぶんがグーをえらぶ
$(".mycat_gu").on('click' , function(){
    select_enemy = 1 + Math.floor(Math.random() * 3);
    $(".audio_atari").get(0).play();
    audio_atari.currentTime = 3;
    console.log(select_enemy);
    console.log(index_my_gu, index_my_cho, index_my_par, index_ene_gu, index_ene_cho, index_ene_par);
    if (select_enemy === 1) {
        // $(".mycat_gu").かわらず
        // $(".select_mycat_gu").かわらず
        $(".mycat_cho").fadeTo("fast",0.3);
        $(".select_mycat_cho").fadeTo("fast",0.3);
        $(".mycat_par").fadeTo("fast",0.3);
        $(".select_mycat_par").fadeTo("fast",0.3);
        // $(".enemy_gu").かわらず
        // $(".select_enemy_gu").かわらず
        $(".enemy_cho").fadeTo("fast",0.3);
        $(".select_enemy_cho").fadeTo("fast",0.3);
        $(".enemy_par").fadeTo("fast",0.3);
        $(".select_enemy_par").fadeTo("fast",0.3);
        // select_enemy = draw;
        setTimeout(function(){
            alert("「あいこ」だよ!!");
        },1000);
        // アイコンの表示を元に戻す
        setTimeout(icon_on, 500);
        //ランダムで選び直す
        setTimeout(random_cat, 500);
    }else if (select_enemy === 2) {
        // $(".mycat_gu").かわらず
        // $(".select_mycat_gu").かわらず
        $(".mycat_cho").fadeTo("fast",0.3);
        $(".select_mycat_cho").fadeTo("fast",0.3);
        $(".mycat_par").fadeTo("fast",0.3);
        $(".select_mycat_par").fadeTo("fast",0.3);
        $(".enemy_gu").fadeTo("fast",0.3);
        $(".select_enemy_gu").fadeTo("fast",0.3);
        // $(".enemy_cho").かわらず
        // $(".select_enemy_cho").かわらず
        $(".enemy_par").fadeTo("fast",0.3);
        $(".select_enemy_par").fadeTo("fast",0.3);
        // select_enemy = win;
        setTimeout(function(){
            alert("「あなたの勝ち」だよ!!");
        },1000);
        win_count_mycat++;
        // winしたネコの画像を指定する
        win_item_mycat = ('img/' + imgs_my_gu[index_my_gu]);
        console.log(win_item_mycat);
        setTimeout(item_get_mycat, 500);
        // アイコンの表示を元に戻す
        setTimeout(icon_on, 500);
        //ランダムで選び直す
        setTimeout(random_cat, 500);

        // console.log(win_count[mycat]);
        // console.log(select_enemy);
    }else if (select_enemy === 3){
        // $(".mycat_gu").かわらず
        // $(".select_mycat_gu").かわらず
        $(".mycat_cho").fadeTo("fast",0.3);
        $(".select_mycat_cho").fadeTo("fast",0.3);
        $(".mycat_par").fadeTo("fast",0.3);
        $(".select_mycat_par").fadeTo("fast",0.3);
        $(".enemy_gu").fadeTo("fast",0.3);
        $(".select_enemy_gu").fadeTo("fast",0.3);
        $(".enemy_cho").fadeTo("fast",0.3);
        $(".select_enemy_cho").fadeTo("fast",0.3);
        // $(".enemy_par").かわらず
        // $(".select_enemy_par").かわらず
        // select_enemy = lose;
        setTimeout(function(){
            alert("「あなたの負け」だよ!!");
        },1000);
        win_count_enemy++;
        // 敵がwinしたネコの画像を指定する
        win_item_enemy = ('img/' + imgs_ene_par[index_ene_par]);
        console.log(win_item_enemy);
        setTimeout(item_get_enemy, 500);
        // アイコンの表示を元に戻す
        setTimeout(icon_on, 500);
        //ランダムで選び直す
        setTimeout(random_cat, 500);
        // console.log(win_count[mycat]);
        // console.log(select_enemy);
        }

        // 表示処理
        $("#win").html(win_count_mycat);
        $("#lose").html(win_count_enemy);
});

// じぶんがチョキをえらぶ
$(".mycat_cho").on('click' , function(){
    select_enemy = 1 + Math.floor(Math.random() * 3);
    $(".audio_atari").get(0).play();
    audio_atari.currentTime = 3;
    console.log(select_enemy);
    console.log(index_my_gu, index_my_cho, index_my_par, index_ene_gu, index_ene_cho, index_ene_par);
    if (select_enemy === 1) {
        $(".mycat_gu").fadeTo("fast",0.3);
        $(".select_mycat_gu").fadeTo("fast",0.3);
        // $(".mycat_cho").かわらず
        // $(".select_mycat_cho").かわらず
        $(".mycat_par").fadeTo("fast",0.3);
        $(".select_mycat_par").fadeTo("fast",0.3);
        // $(".enemy_gu").かわらず
        // $(".select_enemy_gu").かわらず
        $(".enemy_cho").fadeTo("fast",0.3);
        $(".select_enemy_cho").fadeTo("fast",0.3);
        $(".enemy_par").fadeTo("fast",0.3);
        $(".select_enemy_par").fadeTo("fast",0.3);
        // select_enemy = lose;
        setTimeout(function(){
            alert("「あなたの負け」だよ!!");
        },1000);
        win_count_enemy++;
        // 敵がwinしたネコの画像を指定する
        win_item_enemy = ('img/' + imgs_ene_gu[index_ene_gu]);
        console.log(win_item_enemy);
        setTimeout(item_get_enemy, 500);
        // アイコンの表示を元に戻す
        setTimeout(icon_on, 500);
        //ランダムで選び直す
        setTimeout(random_cat, 500);
    }else if (select_enemy === 2) {
        $(".mycat_gu").fadeTo("fast",0.3);
        $(".select_mycat_gu").fadeTo("fast",0.3);
        // $(".mycat_cho").かわらず
        // $(".select_mycat_cho").かわらず
        $(".mycat_par").fadeTo("fast",0.3);
        $(".select_mycat_par").fadeTo("fast",0.3);
        $(".enemy_gu").fadeTo("fast",0.3);
        $(".select_enemy_gu").fadeTo("fast",0.3);
        // $(".enemy_cho").かわらず
        // $(".select_enemy_cho").かわらず
        $(".enemy_par").fadeTo("fast",0.3);
        $(".select_enemy_par").fadeTo("fast",0.3);
        // select_enemy = draw;
        setTimeout(function(){
            alert("「あいこ」だよ!!");
        },1000);
        // アイコンの表示を元に戻す
        setTimeout(icon_on, 500);
        //ランダムで選び直す
        setTimeout(random_cat, 500);
    }else if (select_enemy === 3){
        $(".mycat_gu").fadeTo("fast",0.3);
        $(".select_mycat_gu").fadeTo("fast",0.3);
        // $(".mycat_cho").かわらず
        // $(".select_mycat_cho").かわらず
        $(".mycat_par").fadeTo("fast",0.3);
        $(".select_mycat_par").fadeTo("fast",0.3);
        $(".enemy_gu").fadeTo("fast",0.3);
        $(".select_enemy_gu").fadeTo("fast",0.3);
        $(".enemy_cho").fadeTo("fast",0.3);
        $(".select_enemy_cho").fadeTo("fast",0.3);
        // $(".enemy_par").かわらず
        // $(".select_enemy_par").かわらず
        // select_enemy = win;
        setTimeout(function(){
            alert("「あなたの勝ち」だよ!!");
        },1000);
        win_count_mycat++;
        // winしたネコの画像を指定する
        win_item_mycat = ('img/' + imgs_my_cho[index_my_cho]);
        console.log(win_item_mycat);
        setTimeout(item_get_mycat, 500);
        // アイコンの表示を元に戻す
        setTimeout(icon_on, 500);
        //ランダムで選び直す
        setTimeout(random_cat, 500);
        }

        // 表示処理
        $("#win").html(win_count_mycat);
        $("#lose").html(win_count_enemy);
});

// じぶんがパーをえらぶ
$(".mycat_par").on('click' , function(){
    select_enemy = 1 + Math.floor(Math.random() * 3);
    $(".audio_atari").get(0).play();
    audio_atari.currentTime = 3;
    console.log(select_enemy);
    console.log(index_my_gu, index_my_cho, index_my_par, index_ene_gu, index_ene_cho, index_ene_par);
    if (select_enemy === 1) {
        $(".mycat_gu").fadeTo("fast",0.3);
        $(".select_mycat_gu").fadeTo("fast",0.3);
        $(".mycat_cho").fadeTo("fast",0.3);
        $(".select_mycat_cho").fadeTo("fast",0.3);
        // $(".mycat_par").かわらず
        // $(".select_mycat_par").かわらず
        // $(".enemy_gu").かわらず
        // $(".select_enemy_gu").かわらず
        $(".enemy_cho").fadeTo("fast",0.3);
        $(".select_enemy_cho").fadeTo("fast",0.3);
        $(".enemy_par").fadeTo("fast",0.3);
        $(".select_enemy_par").fadeTo("fast",0.3);
        // select_enemy = win;
        setTimeout(function(){
            alert("「あなたの勝ち」だよ!!");
        },1000);
        win_count_mycat++;
        // winしたネコの画像を指定する
        win_item_mycat = ('img/' + imgs_my_par[index_my_par]);
        console.log(win_item_mycat);
        setTimeout(item_get_mycat, 500);
        // アイコンの表示を元に戻す
        setTimeout(icon_on, 500);
        //ランダムで選び直す
        setTimeout(random_cat, 500);
    }else if (select_enemy === 2) {
        $(".mycat_gu").fadeTo("fast",0.3);
        $(".select_mycat_gu").fadeTo("fast",0.3);
        $(".mycat_cho").fadeTo("fast",0.3);
        $(".select_mycat_cho").fadeTo("fast",0.3);
        // $(".mycat_par").かわらず
        // $(".select_mycat_par").かわらず
        $(".enemy_gu").fadeTo("fast",0.3);
        $(".select_enemy_gu").fadeTo("fast",0.3);
        // $(".enemy_cho").かわらず
        // $(".select_enemy_cho").かわらず
        $(".enemy_par").fadeTo("fast",0.3);
        $(".select_enemy_par").fadeTo("fast",0.3);
        // select_enemy = lose;
        setTimeout(function(){
            alert("「あなたの負け」だよ!!");
        },1000);
        win_count_enemy++;
        // 敵がwinしたネコの画像を指定する
        win_item_enemy = ('img/' + imgs_ene_cho[index_ene_cho]);
        console.log(win_item_enemy);
        setTimeout(item_get_enemy, 500);
        // アイコンの表示を元に戻す
        setTimeout(icon_on, 500);
        //ランダムで選び直す
        setTimeout(random_cat, 500);
    }else if (select_enemy === 3){
        $(".mycat_gu").fadeTo("fast",0.3);
        $(".select_mycat_gu").fadeTo("fast",0.3);
        $(".mycat_cho").fadeTo("fast",0.3);
        $(".select_mycat_cho").fadeTo("fast",0.3);
        // $(".mycat_par").かわらず
        // $(".select_mycat_par").かわらず
        $(".enemy_gu").fadeTo("fast",0.3);
        $(".select_enemy_gu").fadeTo("fast",0.3);
        $(".enemy_cho").fadeTo("fast",0.3);
        $(".select_enemy_cho").fadeTo("fast",0.3);
        // $(".enemy_par").かわらず
        // $(".select_enemy_par").かわらず
        // select_enemy = lose;
        setTimeout(function(){
            alert("「あいこ」だよ!!");
        },1000);
        // アイコンの表示を元に戻す
        setTimeout(icon_on, 500);
        //ランダムで選び直す
        setTimeout(random_cat, 500);
        }

        // 表示処理
        $("#win").html(win_count_mycat);
        $("#lose").html(win_count_enemy);
});

