var enroll = document.getElementById("enroll")
// alert("test")
enroll.onclick = function (e) {
    // 阻止点击跳转
    console.log('背景颜色为', enroll.style.background)
    console.log('内容为：', enroll.innerHTML)
    e.preventDefault()
    if (enroll.innerHTML == "invited successed") {
        enroll.innerHTML = "invite you to join us"
        enroll.style.background = ""  // 背景颜色
        enroll.style.borderColor = "#fff" // 边框颜色
    } else {
        console.log('进入此处')
        enroll.innerHTML = "invited successed"
        enroll.style.background = "#27cb8b"  // 背景颜色
        enroll.style.borderColor = "#27cb8b" // 边框颜色
    }

}