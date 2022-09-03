function loader(css, js) {
    // TOTAL NUMBER OF SCRIPTS
    var total = css.length + js.length,
        now = 0,
        s;

    //  READY?
    var ready = () => {
        now++;
        if (now == total) {
            document.getElementById("loading").remove();
        }
    };

    //  INSERT <LINK> INTO <HEAD>
    css.forEach((url, i) => {
        s = document.createElement("link");
        s.rel = "stylesheet";
        s.href = url;
        s.onload = ready;
        s.onerror = ready;
        document.head.appendChild(s);
    });

    // INSERT <SCRIPT> INTO <HEAD>
    js.forEach((url, i) => {
        s = document.createElement("script");
        s.src = url;
        s.onload = ready;
        s.onerror = ready;
        document.head.appendChild(s);
    });
}