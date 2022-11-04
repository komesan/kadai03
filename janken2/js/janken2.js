// alert(1111);

// じぶんのグーの変数
const imgs_my_gu = ['cat01.png', 'cat02.png', 'cat03.png', 'cat04.jpeg', 'cat05.JPEG', 'cat06.png', 'cat07.jpeg', 'cat08.jpeg', 'cat09.jpeg', 'cat10.jpeg'];  // 画像ファイル名
let index_my_gu = 0;  // インデックス番号
$('.select_mycat_gu').attr('src', 'img/' + imgs_my_gu[index_my_gu]);

// じぶんのチョキの変数
const imgs_my_cho = ['cat01.png', 'cat02.png', 'cat03.png', 'cat04.jpeg', 'cat05.JPEG', 'cat06.png', 'cat07.jpeg', 'cat08.jpeg', 'cat09.jpeg', 'cat10.jpeg'];  // 画像ファイル名
let index_my_cho = 0;  // インデックス番号
$('.select_mycat_cho').attr('src', 'img/' + imgs_my_cho[index_my_cho]);

// じぶんのパーの変数
const imgs_my_par = ['cat01.png', 'cat02.png', 'cat03.png', 'cat04.jpeg', 'cat05.JPEG', 'cat06.png', 'cat07.jpeg', 'cat08.jpeg', 'cat09.jpeg', 'cat10.jpeg'];  // 画像ファイル名
let index_my_par = 0;  // インデックス番号
$('.select_mycat_par').attr('src', 'img/' + imgs_my_par[index_my_par]);

// テキのグーの変数
const imgs_ene_gu = ['enemy01.jpeg', 'enemy02.jpeg', 'enemy03.jpeg', 'enemy04.jpeg', 'enemy05.jpeg', 'enemy06.jpeg', 'enemy07.jpeg', 'enemy08.jpeg', 'enemy09.jpeg', 'enemy10.jpeg'];  // 画像ファイル名
let index_ene_gu = 0;  // インデックス番号
$('.select_enemy_gu').attr('src', 'img/' + imgs_ene_gu[index_ene_gu]);

// テキのチョキの変数
const imgs_ene_cho = ['enemy01.jpeg', 'enemy02.jpeg', 'enemy03.jpeg', 'enemy04.jpeg', 'enemy05.jpeg', 'enemy06.jpeg', 'enemy07.jpeg', 'enemy08.jpeg', 'enemy09.jpeg', 'enemy10.jpeg'];  // 画像ファイル名
let index_ene_cho = 0;  // インデックス番号
$('.select_enemy_cho').attr('src', 'img/' + imgs_ene_cho[index_ene_cho]);

// テキのパーの変数
const imgs_ene_par = ['enemy01.jpeg', 'enemy02.jpeg', 'enemy03.jpeg', 'enemy04.jpeg', 'enemy05.jpeg', 'enemy06.jpeg', 'enemy07.jpeg', 'enemy08.jpeg', 'enemy09.jpeg', 'enemy10.jpeg'];  // 画像ファイル名
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


// let select_mycat_gu = "";
// let select_mycat_cho = "";
// let select_mycat_par = "";

// let select_enemy_gu = "";
// let select_enemy_cho = "";
// let select_enemy_par = "";

let attack_mycat_1 = "";
let attack_mycat_2 = "";
let attack_mycat_3 = "";
let attack_mycat_4 = "";
let attack_mycat_5 = "";
let attack_mycat_6 = "";
let attack_mycat_7 = "";
let attack_mycat_8 = "";

let attack_enemy_1 = "";
let attack_enemy_2 = "";
let attack_enemy_3 = "";
let attack_enemy_4 = "";
let attack_enemy_5 = "";
let attack_enemy_6 = "";
let attack_enemy_7 = "";
let attack_enemy_8 = "";


// スタートボタンを押す
$(".header_start_btn").on('click' , function(){
    if (start_btn === "go") {
    alert("もうスタートしてますよ〜");        
    }else{
    start_btn = "go";
    console.log(start_btn);
    alert("ゲームスタート!!");

    // ランダムでネコをセレクトする
    index_my_gu = Math.floor(Math.random() * 11);
    $('.select_mycat_gu').attr('src', 'img/' + imgs_my_gu[index_my_gu]);
    index_my_cho = Math.floor(Math.random() * 11);
    $('.select_mycat_cho').attr('src', 'img/' + imgs_my_cho[index_my_cho]);
    index_my_par = Math.floor(Math.random() * 11);
    $('.select_mycat_par').attr('src', 'img/' + imgs_my_par[index_my_par]);
    index_ene_gu = Math.floor(Math.random() * 11);
    $('.select_enemy_gu').attr('src', 'img/' + imgs_ene_gu[index_ene_gu]);
    index_ene_cho = Math.floor(Math.random() * 11);
    $('.select_enemy_cho').attr('src', 'img/' + imgs_ene_cho[index_ene_cho]);
    index_ene_par = Math.floor(Math.random() * 11);
    $('.select_enemy_par').attr('src', 'img/' + imgs_ene_par[index_ene_par]);
    }
});

// じぶんがグーをえらぶ
$(".mycat_gu").on('click' , function(){
    select_enemy = Math.floor(Math.random() * 4);
    console.log(select_enemy);
    if (select_enemy === 1) {
        // $(".mycat_gu").かわらず
        // $(".select_mycat_gu").かわらず
        $(".mycat_cho").fadeTo("fast",0.5);
        $(".select_mycat_cho").fadeTo("fast",0.5);
        $(".mycat_par").fadeTo("fast",0.5);
        $(".select_mycat_par").fadeTo("fast",0.5);
        // $(".enemy_gu").かわらず
        // $(".select_enemy_gu").かわらず
        $(".enemy_cho").fadeTo("fast",0.5);
        $(".select_enemy_cho").fadeTo("fast",0.5);
        $(".enemy_par").fadeTo("fast",0.5);
        $(".select_enemy_par").fadeTo("fast",0.5);
        // select_enemy = draw;
        alert("「あいこ」だよ!!");
    }else if (select_enemy === 2) {
        // $(".mycat_gu").かわらず
        // $(".select_mycat_gu").かわらず
        $(".mycat_cho").fadeTo("fast",0.5);
        $(".select_mycat_cho").fadeTo("fast",0.5);
        $(".mycat_par").fadeTo("fast",0.5);
        $(".select_mycat_par").fadeTo("fast",0.5);
        $(".enemy_gu").fadeTo("fast",0.5);
        $(".select_enemy_gu").fadeTo("fast",0.5);
        // $(".enemy_cho").かわらず
        // $(".select_enemy_cho").かわらず
        $(".enemy_par").fadeTo("fast",0.5);
        $(".select_enemy_par").fadeTo("fast",0.5);
        // select_enemy = win;
        alert("「あなたの勝ち」だよ!!");
        win_count_mycat++;
        // console.log(win_count[mycat]);
        // console.log(select_enemy);
    }else if (select_enemy === 3){
        // $(".mycat_gu").かわらず
        // $(".select_mycat_gu").かわらず
        $(".mycat_cho").fadeTo("fast",0.5);
        $(".select_mycat_cho").fadeTo("fast",0.5);
        $(".mycat_par").fadeTo("fast",0.5);
        $(".select_mycat_par").fadeTo("fast",0.5);
        $(".enemy_gu").fadeTo("fast",0.5);
        $(".select_enemy_gu").fadeTo("fast",0.5);
        $(".enemy_cho").fadeTo("fast",0.5);
        $(".select_enemy_cho").fadeTo("fast",0.5);
        // $(".enemy_par").かわらず
        // $(".select_enemy_par").かわらず
        // select_enemy = lose;
        alert("「あなたの負け」だよ!!");
        win_count_enemy++;
        // console.log(win_count[mycat]);
        // console.log(select_enemy);
        }

        // 表示処理
        $("#win").html(win_count_mycat);
        $("#lose").html(win_count_enemy);
});

// じぶんがチョキをえらぶ
$(".mycat_cho").on('click' , function(){
    select_enemy = Math.floor(Math.random() * 4);
    console.log(select_enemy);
    if (select_enemy === 1) {
        $(".mycat_gu").fadeTo("fast",0.5);
        $(".select_mycat_gu").fadeTo("fast",0.5);
        // $(".mycat_cho").かわらず
        // $(".select_mycat_cho").かわらず
        $(".mycat_par").fadeTo("fast",0.5);
        $(".select_mycat_par").fadeTo("fast",0.5);
        // $(".enemy_gu").かわらず
        // $(".select_enemy_gu").かわらず
        $(".enemy_cho").fadeTo("fast",0.5);
        $(".select_enemy_cho").fadeTo("fast",0.5);
        $(".enemy_par").fadeTo("fast",0.5);
        $(".select_enemy_par").fadeTo("fast",0.5);
        // select_enemy = lose;
        alert("「あなたの負け」だよ!!");
        win_count_enemy++;
    }else if (select_enemy === 2) {
        $(".mycat_gu").fadeTo("fast",0.5);
        $(".select_mycat_gu").fadeTo("fast",0.5);
        // $(".mycat_cho").かわらず
        // $(".select_mycat_cho").かわらず
        $(".mycat_par").fadeTo("fast",0.5);
        $(".select_mycat_par").fadeTo("fast",0.5);
        $(".enemy_gu").fadeTo("fast",0.5);
        $(".select_enemy_gu").fadeTo("fast",0.5);
        // $(".enemy_cho").かわらず
        // $(".select_enemy_cho").かわらず
        $(".enemy_par").fadeTo("fast",0.5);
        $(".select_enemy_par").fadeTo("fast",0.5);
        // select_enemy = draw;
        alert("「あいこ」だよ!!");
    }else if (select_enemy === 3){
        $(".mycat_gu").fadeTo("fast",0.5);
        $(".select_mycat_gu").fadeTo("fast",0.5);
        // $(".mycat_cho").かわらず
        // $(".select_mycat_cho").かわらず
        $(".mycat_par").fadeTo("fast",0.5);
        $(".select_mycat_par").fadeTo("fast",0.5);
        $(".enemy_gu").fadeTo("fast",0.5);
        $(".select_enemy_gu").fadeTo("fast",0.5);
        $(".enemy_cho").fadeTo("fast",0.5);
        $(".select_enemy_cho").fadeTo("fast",0.5);
        // $(".enemy_par").かわらず
        // $(".select_enemy_par").かわらず
        // select_enemy = win;
        alert("「あなたの勝ち」だよ!!");
        win_count_mycat++;
        }

        // 表示処理
        $("#win").html(win_count_mycat);
        $("#lose").html(win_count_enemy);
});

// じぶんがパーをえらぶ
$(".mycat_par").on('click' , function(){
    select_enemy = Math.floor(Math.random() * 4);
    console.log(select_enemy);
    if (select_enemy === 1) {
        $(".mycat_gu").fadeTo("fast",0.5);
        $(".select_mycat_gu").fadeTo("fast",0.5);
        $(".mycat_cho").fadeTo("fast",0.5);
        $(".select_mycat_cho").fadeTo("fast",0.5);
        // $(".mycat_par").かわらず
        // $(".select_mycat_par").かわらず
        // $(".enemy_gu").かわらず
        // $(".select_enemy_gu").かわらず
        $(".enemy_cho").fadeTo("fast",0.5);
        $(".select_enemy_cho").fadeTo("fast",0.5);
        $(".enemy_par").fadeTo("fast",0.5);
        $(".select_enemy_par").fadeTo("fast",0.5);
        // select_enemy = win;
        alert("「あなたの勝ち」だよ!!");
        win_count_mycat++;
    }else if (select_enemy === 2) {
        $(".mycat_gu").fadeTo("fast",0.5);
        $(".select_mycat_gu").fadeTo("fast",0.5);
        $(".mycat_cho").fadeTo("fast",0.5);
        $(".select_mycat_cho").fadeTo("fast",0.5);
        // $(".mycat_par").かわらず
        // $(".select_mycat_par").かわらず
        $(".enemy_gu").fadeTo("fast",0.5);
        $(".select_enemy_gu").fadeTo("fast",0.5);
        // $(".enemy_cho").かわらず
        // $(".select_enemy_cho").かわらず
        $(".enemy_par").fadeTo("fast",0.5);
        $(".select_enemy_par").fadeTo("fast",0.5);
        // select_enemy = lose;
        alert("「あなたの負け」だよ!!");
        win_count_enemy++;
    }else if (select_enemy === 3){
        $(".mycat_gu").fadeTo("fast",0.5);
        $(".select_mycat_gu").fadeTo("fast",0.5);
        $(".mycat_cho").fadeTo("fast",0.5);
        $(".select_mycat_cho").fadeTo("fast",0.5);
        // $(".mycat_par").かわらず
        // $(".select_mycat_par").かわらず
        $(".enemy_gu").fadeTo("fast",0.5);
        $(".select_enemy_gu").fadeTo("fast",0.5);
        $(".enemy_cho").fadeTo("fast",0.5);
        $(".select_enemy_cho").fadeTo("fast",0.5);
        // $(".enemy_par").かわらず
        // $(".select_enemy_par").かわらず
        // select_enemy = lose;
        alert("「あいこ」だよ!!");
        }

        // 表示処理
        $("#win").html(win_count_mycat);
        $("#lose").html(win_count_enemy);
});



    // if (select_enemy === draw) {
    //     alert("「あいこ」だよ!!");
    //     return "";

    //     // リフレッシュする
    //     index_my_gu = Math.floor(Math.random() * 4);
    //     $('.select_mycat_gu').attr('src', 'img/' + imgs_my_gu[index_my_gu]);
    //     index_my_cho = Math.floor(Math.random() * 4);
    //     $('.select_mycat_cho').attr('src', 'img/' + imgs_my_cho[index_my_cho]);
    //     index_my_par = Math.floor(Math.random() * 4);
    //     $('.select_mycat_par').attr('src', 'img/' + imgs_my_par[index_my_par]);
    //     index_ene_gu = Math.floor(Math.random() * 4);
    //     $('.select_enemy_gu').attr('src', 'img/' + imgs_ene_gu[index_ene_gu]);
    //     index_ene_cho = Math.floor(Math.random() * 4);
    //     $('.select_enemy_cho').attr('src', 'img/' + imgs_ene_cho[index_ene_cho]);
    //     index_ene_par = Math.floor(Math.random() * 4);
    //     $('.select_enemy_par').attr('src', 'img/' + imgs_ene_par[index_ene_par]);

    //     // 非表示を解除する
    //     $(".mycat_gu").show();
    //     $(".select_mycat_gu").show();
    //     $(".mycat_cho").show();
    //     $(".select_mycat_cho").show();
    //     $(".mycat_par").show();
    //     $(".select_mycat_par").show();
    //     $(".enemy_gu").show();
    //     $(".select_enemy_gu").show();
    //     $(".enemy_cho").show();
    //     $(".select_enemy_cho").show();
    //     $(".enemy_par").show();
    //     $(".select_enemy_par").show();
    // }else if (select_enemy === win) {
    //     alert("「あなたの勝ち」だよ!!");
    //     select_enemy = "";

    //     // winカウントを追加する
    //     win_count_mycat += 1

    //     // winしたネコの画像を指定する
    //     win_item_mycat = imgs_my_gu[index_my_gu]

    //     // リフレッシュする
    //     index_my_gu = Math.floor(Math.random() * 4);
    //     $('.select_mycat_gu').attr('src', 'img/' + imgs_my_gu[index_my_gu]);
    //     index_my_cho = Math.floor(Math.random() * 4);
    //     $('.select_mycat_cho').attr('src', 'img/' + imgs_my_cho[index_my_cho]);
    //     index_my_par = Math.floor(Math.random() * 4);
    //     $('.select_mycat_par').attr('src', 'img/' + imgs_my_par[index_my_par]);
    //     index_ene_gu = Math.floor(Math.random() * 4);
    //     $('.select_enemy_gu').attr('src', 'img/' + imgs_ene_gu[index_ene_gu]);
    //     index_ene_cho = Math.floor(Math.random() * 4);
    //     $('.select_enemy_cho').attr('src', 'img/' + imgs_ene_cho[index_ene_cho]);
    //     index_ene_par = Math.floor(Math.random() * 4);
    //     $('.select_enemy_par').attr('src', 'img/' + imgs_ene_par[index_ene_par]);

    //     // 非表示を解除する
    //     $(".mycat_gu").show();
    //     $(".select_mycat_gu").show();
    //     $(".mycat_cho").show();
    //     $(".select_mycat_cho").show();
    //     $(".mycat_par").show();
    //     $(".select_mycat_par").show();
    //     $(".enemy_gu").show();
    //     $(".select_enemy_gu").show();
    //     $(".enemy_cho").show();
    //     $(".select_enemy_cho").show();
    //     $(".enemy_par").show();
    //     $(".select_enemy_par").show();

    //     // winしたネコをフィールドに入れる
    //     if (win_count_mycat === 1) {
    //         $(".attack_mycat_1").attr('src', 'img/' + win_item_mycat);
    //     }else if (win_count_mycat === 2) {
    //         $(".attack_mycat_2").attr('src', 'img/' + win_item_mycat);
    //     }else if (win_count_mycat === 3) {
    //         $(".attack_mycat_3").attr('src', 'img/' + win_item_mycat);
    //     }else if (win_count_mycat === 4) {
    //         $(".attack_mycat_4").attr('src', 'img/' + win_item_mycat);
    //     }else if (win_count_mycat === 5) {
    //         $(".attack_mycat_5").attr('src', 'img/' + win_item_mycat);
    //     }else if (win_count_mycat === 6) {
    //         $(".attack_mycat_6").attr('src', 'img/' + win_item_mycat);
    //     }else if (win_count_mycat === 7) {
    //         $(".attack_mycat_7").attr('src', 'img/' + win_item_mycat);
    //     }else if (win_count_mycat === 8) {
    //         $(".attack_mycat_8").attr('src', 'img/' + win_item_mycat);
    // }
    // }


