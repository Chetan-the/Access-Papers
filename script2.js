   // JavaScript to alternate colors
   let currentColor = 1; // Start with color 1 (red)

   // Function to alternate between colors
   function alternateColor() {
     const heading = document.getElementById("heading");
     
     if (currentColor === 1) {
       heading.classList.add("color1");
       heading.classList.remove("color2");
       currentColor = 2; // Switch to color 2
     } else {
       heading.classList.add("color2");
       heading.classList.remove("color1");
       currentColor = 1; // Switch to color 1
     }
   }

   // Call the function to set the color
   alternateColor();