"use strict";
const cube = document.getElementById("cube");
const cube_box = document.getElementById("cube-box");

const transparent_btn = document.getElementById("transparent");
const dimension_btn = document.getElementById("dimension");

const top_range = document.getElementById("top_range");
const bottom_range = document.getElementById("bottom_range");
const front_range = document.getElementById("front_range");
const back_range = document.getElementById("back_range");
const left_range = document.getElementById("left_range");
const right_range = document.getElementById("right_range");

const x_axis_control_range = document.getElementById("x-axis");
const y_axis_control_range = document.getElementById("y-axis");
const z_axis_control_range = document.getElementById("z-axis");

const horizontal_position = document.getElementById("horizontal-position");
const vertical_position = document.getElementById("vertical-position");

const top_element = document.getElementById("top_element");
const bottom_element = document.getElementById("bottom_element");
const front_element = document.getElementById("front_element");
const back_element = document.getElementById("back_element");
const left_element = document.getElementById("left_element");
const right_element = document.getElementById("right_element");

transparent_btn.addEventListener("click", () => {
  const box_item = document.querySelectorAll(".box-item");
  box_item.forEach((item) => {
    if (getComputedStyle(item).backgroundColor === "rgb(33, 37, 41)") {
      item.style.backgroundColor = "transparent";
    } else {
      item.style.backgroundColor = "rgb(33, 37, 41)";
    }
  });
});
horizontal_position.addEventListener("input", () => {
  cube_box.style.left = horizontal_position.value * 8.2 + "%";
});
vertical_position.addEventListener("input", () => {
  cube_box.style.top = vertical_position.value * 7.1 + "%";
});

const axis_data = { rotate_x: 0, rotate_y: 0, rotate_z: 0 };
localStorage.setItem("cube_axis_data", JSON.stringify(axis_data));
const set_rotation = () => {
  const rotation_data = JSON.parse(localStorage.getItem("cube_axis_data"));
  cube.style.transform =
    "rotateX(" +
    rotation_data.rotate_x +
    "deg) rotateY(" +
    rotation_data.rotate_y +
    "deg) rotateZ(" +
    rotation_data.rotate_z +
    "deg)";
};

x_axis_control_range.addEventListener("input", () => {
  const rotation_data = JSON.parse(localStorage.getItem("cube_axis_data"));
  rotation_data.rotate_y = Number(x_axis_control_range.value);
  localStorage.setItem("cube_axis_data", JSON.stringify(rotation_data));
  set_rotation();
});
y_axis_control_range.addEventListener("input", () => {
  const rotation_data = JSON.parse(localStorage.getItem("cube_axis_data"));
  rotation_data.rotate_x = Number(y_axis_control_range.value);
  localStorage.setItem("cube_axis_data", JSON.stringify(rotation_data));
  set_rotation();
});
z_axis_control_range.addEventListener("input", () => {
  const rotation_data = JSON.parse(localStorage.getItem("cube_axis_data"));
  rotation_data.rotate_z = Number(z_axis_control_range.value);
  localStorage.setItem("cube_axis_data", JSON.stringify(rotation_data));
  set_rotation();
});

top_range.addEventListener("input", () => {
  top_element.style.transform =
    "translateX(0px)    translateY(" +
    Number(-100 - top_range.value * 20) +
    "px) translateZ(0px)  rotateX(-90deg)  rotateY(0deg)   rotateZ(0deg)";
});
bottom_range.addEventListener("input", () => {
  bottom_element.style.transform =
    "translateX(0px)    translateY(" +
    Number(100 + bottom_range.value * 20) +
    "px)  translateZ(0px)  rotateX(90deg)  rotateY(0deg)   rotateZ(0deg)";
});
front_range.addEventListener("input", () => {
  front_element.style.transform =
    "translateX(0px)    translateY(0px)    translateZ(" +
    Number(100 + front_range.value * 20) +
    "px) rotateX(0deg)  rotateY(0deg)   rotateZ(0deg)";
});
back_range.addEventListener("input", () => {
  back_element.style.transform =
    "translateX(0px)    translateY(0px)    translateZ(" +
    Number(-100 - back_range.value * 20) +
    "px) rotateX(0deg)  rotateY(0deg)   rotateZ(0deg)";
});
left_range.addEventListener("input", () => {
  left_element.style.transform =
    "translateX(-" +
    Number(100 + left_range.value * 20) +
    "px) translateY(0px)    translateZ(0px)   rotateX(0deg)  rotateY(-90deg) rotateZ(0deg)";
});
right_range.addEventListener("input", () => {
  right_element.style.transform =
    "translateX(" +
    Number(100 + right_range.value * 20) +
    "px)   translateY(0px)    translateZ(0px)   rotateX(0deg)  rotateY(90deg) rotateZ(0deg)";
});

dimension_btn.addEventListener("click", () => {
  if (cube.style.transform == "rotateX(-10deg) rotateY(10deg) rotateZ(0deg)") {
    set_rotation();
  } else {
    cube.style.transform = "rotateX(-10deg) rotateY(10deg) rotateZ(0deg)";
  }
});
