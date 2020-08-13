for (let i = 0; i < 40; ++i) {
    let center_x = document.defaultView.innerWidth / 2;
    let center_y = document.defaultView.innerHeight / 2;
    target = document.getElementById("b" + (i + 1));
    target.style.transfrom = "scale(.5)";
    target.style.left = Math.random() * center_x * 2 + "px";
    target.style.top = Math.random() * center_y * 2 + "px";

}
for (let i = 20; i < 40; ++i) {
    target = document.getElementById("b" + (i + 1));
    target.style.background = "rgba(135, 218, 27, .1)";
}
state = 0;

function on_bricks_clicked() {
    let brick_width = 75;
    let brick_height = 25;
    let center_x = document.defaultView.innerWidth / 2;
    let center_y = document.defaultView.innerHeight / 2;
    let oven_height = 9 * brick_height;
    let oven_width = 5 * brick_width;
    let places = [];
    if (state == 0) {
        // фундамент печи
        for (let i = 0; i < 5; ++i) {
            let offset_x = center_x - oven_width / 2 + (i) * brick_width;
            let offset_y = center_y + oven_height / 2;
            let coords = { x: offset_x, y: offset_y };
            places.push(coords);
        }

        // главные стенки
        for (let i = 0; i < 3; ++i) {
            let offset_x = center_x - oven_width / 2 + brick_width;
            let offset_y = center_y + oven_height / 2 - brick_height * (i + 1);
            let coords1 = {
                x: offset_x - brick_width / 2,
                y: offset_y,
            };
            let coords2 = {
                x: center_x * 2 - offset_x - brick_width / 2,
                y: offset_y,
            };
            places.push(coords1);
            places.push(coords2);
        }

        // стенки у основания верхушки
        for (let i = 0; i < 2; ++i) {
            let offset_x = center_x - oven_width / 2 + brick_width * 1.5;
            let offset_y = center_y + oven_height / 2 - brick_height * (i + 4);
            let coords1 = {
                x: offset_x - brick_width / 2,
                y: offset_y,
            };
            let coords2 = {
                x: center_x * 2 - offset_x - brick_width / 2,
                y: offset_y,
            };
            places.push(coords1);
            places.push(coords2);
        }

        // закрывающие кирпичи
        for (let i = 0; i < 1; ++i) {
            let offset_x = center_x - oven_width / 2 + brick_width * 2;
            let offset_y = center_y + oven_height / 2 - brick_height * (i + 6);
            let coords1 = {
                x: offset_x - brick_width / 2,
                y: offset_y,
            };
            let coords2 = {
                x: center_x * 2 - offset_x - brick_width / 2,
                y: offset_y,
            };
            places.push(coords1);
            places.push(coords2);
        }
        //труба
        for (let i = 0; i < 2; ++i) {
            let offset_x = center_x - brick_width / 2;
            let offset_y = center_y + oven_height / 2 - brick_height * (i + 7);
            let coords = {
                x: offset_x,
                y: offset_y,
            };
            places.push(coords);
        }

        for (let i = 0; i < 19; ++i) {
            target = "#b" + (i + 1);
            // console.log("ok");
            x = places[i].x;
            y = places[i].y;
            anime({
                targets: target,
                left: x,
                top: y,
                easing: "easeInOutBounce",
                duration: Math.random() * 3000 + 1000,
            });
        }
        anime({
            targets: ".boi",
            color: "rgba(233, 160, 42, 1)",
            duration: 4000,
            easing: "easeInOutBounce",
        });
        state = 1;
    } else {
        for (let i = 0; i < 19; ++i) {
            coords = { x: Math.random() * center_x * 2, y: Math.random() * center_y * 2 }
            places.push(coords);
        }
        for (let i = 0; i < 19; ++i) {
            target = "#b" + (i + 1);
            // console.log("ok");
            x = places[i].x;
            y = places[i].y;
            anime({
                targets: target,
                left: x,
                top: y,
                easing: "easeInOutBounce",
                duration: Math.random() * 3000 + 1000,
            });
        }
        anime({
            targets: ".boi",
            color: "rgba(233, 160, 42, 0)",
            duration: 4000,
            easing: "easeInOutBounce",
        });
        state = 0;
    }

}