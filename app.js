//イベント
//$('セレクタ').メソッド(引数);
//セレクタ→　id, class, タグ
//id = #idName, class = .className, tag = tagName

//css(あまり使わない)
//$('セレクタ').css('プロパティ名', 値);

//this →　イベントの発生元(クリックやホバー等)


//DOMContentLoaded
//text() = テキスト内容を習得 / text('hoge') = テキストにhogeをセット
//val()←formに入力された内容を習得
//属性
$(function() {
	console.log($('#btn').parent().html());
	console.log($('#btn').html());
	console.log($('#btn').text('テキスト'));


	$('#btn').on('click', function() {
		console.log('ボタンがクリックされました');

		//メッソドチェーン
		let btn = $('<button>').text('後ろに追加').attr('href', 'hogehoge');

		$(this).before('<button>前に追加</button>');
		$(this).after(btn);
		$(this).prepend('子要素 前');
		$(this).append('子要素 後ろ');


		$(this).addClass('add');//つける
		$(this).removeClass('add');//外す
		$(this).toggleClass('add');//つけ外し

		$(this).css('color', 'blue');

		$('.hoge').fadeOut(3000);//3秒かけて消す

	})

 //hoverしたとき
	$('#btn').on('mouseover', function(){
		console.log('マウスオーバーされました');
	})
	$('#btn').on('mouseleave', function(){
		console.log('マウスが離れました');
	})


	$('#btn3').on ('click',function(){
		$('.hoge').fadeIn(1000);//1秒かけて表示する
	})


	//クリックした/*$('#btn2').click(addLink);*/
	//onの方を基本的に使う！！！(複数のイベントに対応)
	$('#btn2').on('click', addLink);
                         //↓
		function addLink(){//関数//
			//ユーザーが入力した内容を取得
		let url = $('#url').val();
		let site = $('#site').val();
		//aタグを作る　テキスト = site / herf = url
		let a = $('<a>').text(site).attr('href', url);
		//追加する
		$('form').append(a);
		}



});

/*//クリックした
	$('#btn2').on('click', function(){
		//ユーザーが入力した内容を取得
		let url = $('#url').val();
		let site = $('#site').val();
		//aタグを作る　テキスト = site / herf = url
		let a = $('<a>').text(site).attr('href', url);
		//追加する
		$('form').append(a);
	})
*/