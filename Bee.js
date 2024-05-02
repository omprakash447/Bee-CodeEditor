function run() {
    let html = document.getElementById("htmlcode").value;
    let css = document.getElementById("csscode").value;
    let js = document.getElementById("jscode").value;
    let run = document.getElementById("output");


    run.contentDocument.body.innerHTML = html + "<style>" + css + "</style>";
    run.contentWindow.eval(js);
}