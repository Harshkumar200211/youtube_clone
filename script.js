fetch('scriptjson.js')
    .then((data) => {
        return data.json();
    })
    .then((completedata) => {
        let data1 = "";
        completedata.map((values) => {
            data1 += `
            <div id="video_cart">
                <div id="video_body">
                    <video src="${values.video}" autoplay loop controls></video>
                </div>
                <div id="video_name">
                    <div id="channel_logo">
                        <img src=${values.image} alt="">
                    </div>
                    <div id="title_video">
                        <h3>${values.h3}</h3>
                        <p>${values.p}</p>
                    </div>
                </div>
            </div>`;
        });
        document.getElementById("videos_s").innerHTML = data1;
    });
