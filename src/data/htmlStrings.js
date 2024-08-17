const htmlDesigns = [
    `        
      <div style="position: relative; background-image: url('https://picsum.photos/800/1200'); background-size: cover; background-position: center; overflow: scroll; box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);">
        <div style="position: absolute; top: 50px; left: 50px; width: 150px; height: 150px; background-color: #3498db; transform: rotate(45deg); z-index: 1;"></div>
        <div style="position: absolute; top: 200px; left: 250px; width: 100px; height: 100px; background-color: #e74c3c; border-radius: 50%; z-index: 1;"></div>
        <div style="position: absolute; bottom: 50px; right: 50px; width: 0; height: 0; border-left: 50px solid transparent; border-right: 50px solid transparent; border-bottom: 100px solid #f1c40f; z-index: 1;"></div>
  
        <!-- SVG Shapes -->
        <svg style="position: absolute; top: 150px; left: 100px; z-index: 2;" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" fill="#8e44ad" />
        </svg>
        <svg style="position: absolute; top: 300px; right: 100px; z-index: 2;" width="120" height="120" xmlns="http://www.w3.org/2000/svg">
          <circle cx="60" cy="60" r="60" fill="#27ae60" />
        </svg>
        <svg style="position: absolute; bottom: 150px; left: 50px; z-index: 2;" width="120" height="60" xmlns="http://www.w3.org/2000/svg">
          <polygon points="60,0 120,60 0,60" fill="#f39c12" />
        </svg>
  
        <div style="position: relative; z-index: 3; padding: 20px; color: #333; background-color: rgba(255, 255, 255, 0.8);">
          <h1>Beautiful Layout with Shapes and SVGs</h1>
          <p>This layout integrates text, geometric shapes, and SVGs with a background image from the Picsum API. The combination of rectangles, circles, triangles, and SVG shapes creates a visually dynamic design.</p>
          <p>The SVGs add scalable vector elements to the layout, which work well with different screen resolutions. This approach is ideal for creating modern, responsive documents or presentations.</p>
        </div>
      </div>
    `,
  
    `        
      <div style="position: relative; background-color: #f9f9f9; box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1); border: 1px solid #ddd; border-radius: 8px;">
        <div style="position: absolute; top: 30px; left: 30px; width: 100%; height: 200px; background-image: url('https://picsum.photos/800/400'); background-size: cover; background-position: center;"></div>
        <div style="position: absolute; top: 250px; left: 30px; width: calc(100% - 60px); padding: 20px; background-color: #fff; border-radius: 8px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);">
          <h2 style="margin: 0 0 10px; color: #333;">Feature Article</h2>
          <p style="font-size: 16px; color: #555; line-height: 1.6;">This page highlights a feature article with a background image and some text. The layout is clean and modern, ideal for showcasing important content with visual interest.</p>
        </div>
      </div>
    `,
  
    `        
      <div style="position: relative; background-color: #e1e1e1; box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);">
        <div style="position: absolute; top: 20px; left: 20px; width: calc(100% - 40px); height: 200px; background-image: url('https://picsum.photos/800/500'); background-size: cover; background-position: center;"></div>
        <div style="position: absolute; top: 240px; left: 20px; width: calc(100% - 40px); padding: 20px; background-color: #fff; border-radius: 8px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);">
          <h2 style="margin: 0 0 10px; color: #333;">Exploring the Outdoors</h2>
          <p style="font-size: 16px; color: #666; line-height: 1.6;">Discover the beauty of nature with our outdoor exploration feature. This page is designed to captivate the reader's attention with vivid imagery and engaging text.</p>
        </div>
      </div>
    `,
  
    `        
      <div style="position: relative; background-color: #fff; border: 1px solid #ddd; border-radius: 8px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);">
        <div style="position: absolute; top: 20px; left: 20px; width: 100%; height: 200px; background-color: #3498db; color: #fff; display: flex; align-items: center; justify-content: center; font-size: 24px; font-weight: bold;">Magazine Cover</div>
        <div style="position: absolute; top: 240px; left: 20px; width: calc(100% - 40px); padding: 20px; background-color: #fff; border-radius: 8px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);">
          <h2 style="margin: 0 0 10px; color: #333;">Inside the Magazine</h2>
          <p style="font-size: 16px; color: #555; line-height: 1.6;">This design features a vibrant cover page and content section. The cover page uses a solid color background to create a strong visual impact, while the content area is styled for readability.</p>
        </div>
      </div>
    `,
  
    `        
      <div style="position: relative; background-color: #f4f4f4; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);">
        <div style="position: absolute; top: 20px; left: 20px; width: 100%; height: 200px; background-image: url('https://picsum.photos/800/600'); background-size: cover; background-position: center;"></div>
        <div style="position: absolute; top: 240px; left: 20px; width: calc(100% - 40px); padding: 20px; background-color: #fff; border-radius: 8px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);">
          <h2 style="margin: 0 0 10px; color: #333;">Art and Design</h2>
          <p style="font-size: 16px; color: #666; line-height: 1.6;">Explore the world of art and design with this visually engaging page. The use of background images and layered content creates a dynamic and interactive layout.</p>
        </div>
      </div>
    `,
  ];
  
  export const getRandomHtmlDesign = () => {
    const randomIndex = Math.floor(Math.random() * htmlDesigns.length);
    return htmlDesigns[randomIndex];
  };