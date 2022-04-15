let html = document.querySelector("#html")
let style = document.querySelector("#style")
/**
 * document.querySelector()
   文档对象模型 Ducument 引用的 querySelector() 方法返回文档中与指定选择器或者选择器组匹配的第一个 Elemet 对象，如果找不到匹配项，则返回null
 * Elemet是一个通用性非常强的基类，所有Ducument对象下的对象都继承自它，这个接口描述了所有相同种类的元素所普遍具有的方法和属性
 */
let string = `你好，我是一名前端新人。`
let n = 0

//demo.innerHTML = string.substring(0,n)
/**
 * element.innerHTML设置或获取HTML语法表示的元素的后代。
   向一个元素中插入一段 HTML
 * substring()方法
   返回一个字符串在开始索引到结束索引之间的一个子集, 或从开始索引直到字符串的末尾的一个子集。
 */

let step = () => {
    setTimeout(() => {
        n = n + 1
        html.innerHTML = string.substring(0,n)
        if(n < string.length){
            step()
        }
    },150)
}

// step()

let string1 = `/* 你好，我的名字是孙梦珂
 * 我是一名前端新人
 * 接下来我要展示一下前端功底
 * 首先准备一个div
*/
#div1{
  border:1px solid black;
  width:200px;
  height:200px;
}
/* 接下来把div演变成一个八卦图
 * 先把div变成一个圆
*/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 1px 2px rgba(0, 0, 0, 0.2);
    border:none;
}
/* 阴阳形成八卦，即一黑一白
*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 开始变阴阳 */
#div1::before{
    width:100px;
    height:100px;
    top:0;
    left:50%;
    transform:translateX(-50%);
    border-radius:50%;
    background:#000;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width:100px;
    height:100px;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    border-radius:50%;
    background:#fff;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`
/* 
 * x偏移量 | y偏移量 | 阴影模糊半径 | 阴影扩散半径 | 阴影颜色 
 * box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
*/

let string2 = ""
let m = 0

let step1 = () => {
    setTimeout(() => {
        if(string1[m] === "\n"){
            string2 += "<br>"
        }else if(string1[m] === " "){
            string2 += "&nbsp;"
        }
        else{
            string2 += string1[m]
        }
        html.innerHTML = string2
        style.innerHTML = string1.substring(0,m)
        window.scrollTo(0,99999)
        html.scrollTo(0,99999)
        if(m < string1.length-1){
            m = m + 1
            step1()
        }
    },10)
}
step1()