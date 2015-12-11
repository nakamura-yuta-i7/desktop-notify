function checkPermission() {
	var node = document.getElementById("notify-permission");
	if(!notify.isSupported) {
		node.innerHTML = "このブラウザではデスクトップ通知が許可されていません";
	}
	else {
		switch(notify.permissionLevel()){
			case notify.PERMISSION_GRANTED:
				node.innerHTML = "デスクトップ通知を使用することができます。";
				break;
			case notify.PERMISSION_DEFAULT:
				node.innerHTML = "「通知許可を求める」から、通知を許可して下さい";
				break;
			case notify.PERMISSION_DENIED:
				node.innerHTML = "デスクトップ通知が許可されていません。ブラウザの設定を確認して下さい。";
				break;
		}
	}
}
function requestPermission() {
	notify.requestPermission();
}
function show() {
	notify.config({autoClose: 1000});
	notify.createNotification("タイトル", { body: "本文。ほげほげほげほげ本文。ほげほげほげほげ本文。ほげほげほげほげ本文。ほげほげほげほげ本文。ほげほげほげほげ本文。ほげほげほげほげ本文。ほげほげほげほげ本文。ほげほげほげほげ本文。ほげほげほげほげ本文。ほげほげほげほげ本文。ほげほげほげほげ本文。ほげほげほげほげ本文。ほげほげほげほげ本文。ほげほげほげほげ本文。ほげほげほげほげ2", icon: "/images/notice.ico" });
}
window.onload = function() {
	checkPermission();
}
