let color_input=document.getElementById("bgColorInput")
let font_input=document.getElementById("fontColorInput")
let font_size=document.getElementById("fontSizeInput")
let font_weight=document.getElementById("fontWeightInput")
let padding_input=document.getElementById("paddingInput")
let border_radius_input=document.getElementById("borderRadiusInput")
let custom_button=document.getElementById("customButton")
function applly() {
    let color_value=color_input.value;
    let font_value=font_input.value;
    let font_size_value=font_size.value;
    let font_weight_value=font_weight.value;
    let padding_input_value=padding_input.value;
    let border_radius_input_value=border_radius_input.value;
    
    custom_button.style.backgroundColor=color_value;
    custom_button.style.color=font_value;
    custom_button.style.fontSize=font_size_value;
    custom_button.style.fontWeight=font_weight_value;
    custom_button.style.padding=padding_input_value;
    custom_button.style.borderRadius=border_radius_input_value;
}