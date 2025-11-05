// questions.js
// Generates 100 questions per category by expanding a smaller base set.
// Exposes ALL_QUESTIONS object for your main HTML script to use.

(function(global){
  // Helper: duplicate and slightly vary question text so we can expand to 100 items
  function expandTo100(baseArray, label){
    const out = [];
    const baseLen = baseArray.length;
    for(let i=0;i<100;i++){
      const item = Object.assign({}, baseArray[i % baseLen]); // shallow copy
      // append variant number for uniqueness but keep correctness the same
      item.question = `${item.question} (${label} Q${i+1})`;
      out.push(item);
    }
    return out;
  }

  // Base question banks (20 high-quality questions per category).
  // We'll expand each to 100 using expandTo100.
  // You may edit these base questions; correctness maintained on expansion.

  const base_GraphicDesign = [
    {question:"Which software is popular for vector graphics?", answers:["Adobe Illustrator","Photoshop","InDesign","Premiere Pro"], correct:"Adobe Illustrator"},
    {question:"What does 'RGB' stand for?", answers:["Red Green Blue","Red Gray Black","Ready Go Build","Really Good Brand"], correct:"Red Green Blue"},
    {question:"Which file format is best for logos (scalable)?", answers:["SVG","JPEG","PNG","GIF"], correct:"SVG"},
    {question:"What is 'kerning' in typography?", answers:["Spacing between letters","Image resolution","Color saturation","Font style"], correct:"Spacing between letters"},
    {question:"Which color model is used for most printing?", answers:["CMYK","RGB","HSV","LAB"], correct:"CMYK"},
    {question:"What is the main purpose of a moodboard?", answers:["Inspiration and visual direction","To finalize fonts","To print posters","To set prices"], correct:"Inspiration and visual direction"},
    {question:"Which principle deals with visual weight balance?", answers:["Balance","Proximity","Contrast","Alignment"], correct:"Balance"},
    {question:"What is a vector image?", answers:["Math-based scalable graphic","Pixel-based photo","Compressed video","Raster texture"], correct:"Math-based scalable graphic"},
    {question:"What is DPI important for?", answers:["Print image sharpness","Website layout","Animation timing","Color selection"], correct:"Print image sharpness"},
    {question:"Which is a raster image editor?", answers:["Photoshop","Illustrator","Figma (vector)","SVG (format)"], correct:"Photoshop"},
    {question:"What's 'negative space' in design?", answers:["Empty space around elements","Background image","Text color","Drop shadow"], correct:"Empty space around elements"},
    {question:"Which font category is typically used for body text?", answers:["Sans-serif","Decorative","Script","Novelty"], correct:"Sans-serif"},
    {question:"What is 'contrast' used for in design?", answers:["Make elements stand out","Make colors identical","Blur images","Decrease resolution"], correct:"Make elements stand out"},
    {question:"Which export format supports transparency?", answers:["PNG","JPEG","BMP","TIFF"], correct:"PNG"},
    {question:"What is grid layout used for?", answers:["Aligning and organizing content","Color grading","Sound mixing","Packing boxes"], correct:"Aligning and organizing content"},
    {question:"Which tool is best for prototyping UI?", answers:["Figma","Notepad","Excel","MS Paint"], correct:"Figma"},
    {question:"What is 'branding' in design?", answers:["Creating consistent identity for a business","Printing flyers only","Writing code","Making music"], correct:"Creating consistent identity for a business"},
    {question:"What is 'saturation' in color?", answers:["Color intensity","Brightness only","Sharpness","Size"], correct:"Color intensity"},
    {question:"Which file should you supply for large format print?", answers:["High-res PDF or vector files","Low-res JPEG","GIF animated","Small PNG"], correct:"High-res PDF or vector files"},
    {question:"Why use SVG for icons?", answers:["Scalable without losing quality","Small color palette only","Not supported on web","Produces raster images"], correct:"Scalable without losing quality"}
  ];

  const base_ColorCombinations = [
    {question:"Which neutral color pairs well with most bright colors?", answers:["Gray","Neon Green","Hot Pink","Bright Yellow"], correct:"Gray"},
    {question:"Which color is complementary to blue?", answers:["Orange","Green","Purple","Yellow"], correct:"Orange"},
    {question:"What color pair gives a high contrast look?", answers:["Black and White","Red and Maroon","Navy and Black","Beige and Tan"], correct:"Black and White"},
    {question:"Which combination feels energetic and warm?", answers:["Red and Yellow","Blue and Green","Gray and White","Black and Navy"], correct:"Red and Yellow"},
    {question:"Analogous colors are those that are:", answers:["Next to each other on color wheel","Opposite on wheel","Random","Shades of gray"], correct:"Next to each other on color wheel"},
    {question:"Triadic color scheme uses how many colors?", answers:["Three evenly spaced colors on wheel","Two colors","Four colors","One color"], correct:"Three evenly spaced colors on wheel"},
    {question:"Which color often pairs with red to feel luxurious?", answers:["Gold","Pea green","Neon pink","Sky blue"], correct:"Gold"},
    {question:"For calming palette, choose:", answers:["Blue and soft neutrals","Bright neon mix","High contrast red/green","Pure black"], correct:"Blue and soft neutrals"},
    {question:"Monochrome palettes use:", answers:["Different shades of one color","Many unrelated colors","Only black","Only white"], correct:"Different shades of one color"},
    {question:"To make text readable on red background, use:", answers:["White text","Red text","Bright red text","Orange text"], correct:"White text"},
    {question:"Which color reduces eye strain for long reading?", answers:["Soft beige or warm neutrals","Loud neon colors","High contrast black on red","Pure white backgrounds"], correct:"Soft beige or warm neutrals"},
    {question:"Which color combo is popular for tech trust?", answers:["Blue + White","Orange + Brown","Lime + Pink","Beige + Olive"], correct:"Blue + White"},
    {question:"Warm color family includes:", answers:["Red, orange, yellow","Blue, purple, green","Gray family only","Black and white"], correct:"Red, orange, yellow"},
    {question:"Cool color family includes:", answers:["Blue, green, purple","Red, orange, yellow","Brown only","Pink and gold"], correct:"Blue, green, purple"},
    {question:"Which accent works well with navy blue?", answers:["Gold or warm orange","Teal only","Black","Burgundy only"], correct:"Gold or warm orange"},
    {question:"High-key palettes are:", answers:["Mostly light tones","Mostly dark tones","Only black","Only saturated colors"], correct:"Mostly light tones"},
    {question:"Low-key palettes are:", answers:["Mostly dark tones","Only white","High contrast neon","Pastel only"], correct:"Mostly dark tones"},
    {question:"Complementary colors create:", answers:["Strong contrast","No contrast","Harmony always","Greyscale"], correct:"Strong contrast"},
    {question:"Split-complementary is:", answers:["One base color + two adjacent to its complement","Same as complementary","Three identical colors","Four tertiary colors"], correct:"One base color + two adjacent to its complement"},
    {question:"Using an accent color helps:", answers:["Draw attention to important elements","Hide logos","Reduce readability","Make images smaller"], correct:"Draw attention to important elements"}
  ];

  const base_ColorMeaning = [
    {question:"What does blue commonly represent in branding?", answers:["Trust and calm","Anger","Luxury only","Hunger"], correct:"Trust and calm"},
    {question:"Green in branding often suggests:", answers:["Nature and growth","Danger","Luxury only","Coldness"], correct:"Nature and growth"},
    {question:"Red usually evokes:", answers:["Energy and urgency","Calmness","Trustworthiness only","Silence"], correct:"Energy and urgency"},
    {question:"Yellow often communicates:", answers:["Optimism and attention","Sadness","Technicality only","Danger only"], correct:"Optimism and attention"},
    {question:"Black in luxury brands suggests:", answers:["Elegance and power","Youthfulness","Inexperience","Softness"], correct:"Elegance and power"},
    {question:"Purple is often associated with:", answers:["Luxury and creativity","Hygiene","Minimalism only","Low cost"], correct:"Luxury and creativity"},
    {question:"Orange tends to feel:", answers:["Friendly and energetic","Cold and distant","Solemn","Purely formal"], correct:"Friendly and energetic"},
    {question:"Pink often targets:", answers:["Youthfulness and play","Industrial tech","Finance professionals only","Legal documents"], correct:"Youthfulness and play"},
    {question:"Brown often represents:", answers:["Earthiness and reliability","Futuristic tech","Luxury only","Purity"], correct:"Earthiness and reliability"},
    {question:"White commonly stands for:", answers:["Simplicity and cleanliness","Aggression","Energy","Heat"], correct:"Simplicity and cleanliness"},
    {question:"Gray in branding is:", answers:["Neutral and balanced","Extremely loud","Very youthful only","Colorful"], correct:"Neutral and balanced"},
    {question:"Gold rounds to:", answers:["Prestige and wealth","Minimalism","Mystery only","Humor"], correct:"Prestige and wealth"},
    {question:"Blue + green combo suggests:", answers:["Natural trust and stability","Danger and warning","Clashing brand","Futuristic only"], correct:"Natural trust and stability"},
    {question:"Red + black often feels:", answers:["Bold and intense","Soft and quiet","Neutral and balanced","Pastel"], correct:"Bold and intense"},
    {question:"Pastel colors usually feel:", answers:["Soft and friendly","Aggressive and loud","High tech only","Formal only"], correct:"Soft and friendly"},
    {question:"Neon colors typically read as:", answers:["Energetic and youthful","Serious and classic","Luxury only","Trustworthy only"], correct:"Energetic and youthful"},
    {question:"Earth tones are great for:", answers:["Organic and natural brands","Space tech","Luxury watches only","Nightclubs only"], correct:"Organic and natural brands"},
    {question:"Muted palettes feel:", answers:["Subtle and sophisticated","Loud and brash","Very bright only","Unprofessional"], correct:"Subtle and sophisticated"},
    {question:"Bright saturated palettes suggest:", answers:["Youth and attention","Calm and quiet","Old-fashioned only","Corporate austerity"], correct:"Youth and attention"},
    {question:"Color psychology is used to:", answers:["Influence perception and emotion","Determine taxes","Calculate shipping","Write code"], correct:"Influence perception and emotion"}
  ];

  const base_BrandColorSuggestions = [
    {question:"Which color suits a health & wellness brand?", answers:["Green","Neon pink","Black only","Orange only"], correct:"Green"},
    {question:"Which color suits a finance brand for trust?", answers:["Blue","Hot pink","Purple only","Lime"], correct:"Blue"},
    {question:"Which color suits a luxury fashion label?", answers:["Black & Gold","Neon green","Sky blue only","Brown only"], correct:"Black & Gold"},
    {question:"Which color suits a kid's toy brand?", answers:["Bright multicolor","Dark gray","Olive only","Burgundy only"], correct:"Bright multicolor"},
    {question:"Which colors suit a tech startup?", answers:["Navy + bright accent","Brown + mustard","Pastel only","Black only"], correct:"Navy + bright accent"},
    {question:"Which palette suits an eco brand?", answers:["Greens + earth neutrals","Neon neon","Black + silver only","Ultra pink"], correct:"Greens + earth neutrals"},
    {question:"Which tones suit a craft brewery?", answers:["Warm browns and amber","Lilac only","White only","Neon green"], correct:"Warm browns and amber"},
    {question:"Which colors fit a children’s education app?", answers:["Bright primary colors","All-black","Muted browns","Metallic only"], correct:"Bright primary colors"},
    {question:"Which color suits organic food packaging?", answers:["Earth green and kraft","Neon pink","Steel blue only","Lime only"], correct:"Earth green and kraft"},
    {question:"Which looks professional for law firms?", answers:["Navy and charcoal","Bright orange","Hot pink","Neon green"], correct:"Navy and charcoal"}
  ];

  const base_MarketingBranding = [
    {question:"What is a CTA in marketing?", answers:["Call To Action","Customer Total Analysis","Centralized Tagging App","Creative Text Asset"], correct:"Call To Action"},
    {question:"Brand consistency means:", answers:["Using same identity across channels","Changing logo every month","No logo or colors","Only social media posts"], correct:"Using same identity across channels"},
    {question:"What is a buyer persona?", answers:["A profile of a target customer","An actual buyer","A legal document","An invoice"], correct:"A profile of a target customer"},
    {question:"A value proposition explains:", answers:["Why a customer should buy from you","How to build a website","How to print flyers","How to send email"], correct:"Why a customer should buy from you"},
    {question:"A/B testing is used to:", answers:["Compare two variations for performance","Design logos only","Create invoices","Publish press releases"], correct:"Compare two variations for performance"},
    {question:"Brand architecture helps to:", answers:["Organize sub-brands and products","Choose font sizes","Create email signatures only","Design textures"], correct:"Organize sub-brands and products"},
    {question:"Brand voice describes:", answers:["Tone and personality in communication","The visual color only","The price list","Customer emails only"], correct:"Tone and personality in communication"},
    {question:"A marketing funnel maps:", answers:["Stages from awareness to purchase","Only the checkout page","Inventory levels","Employee shifts"], correct:"Stages from awareness to purchase"},
    {question:"A tagline should be:", answers:["Short and memorable","Very long and detailed","Full company history","Complex legal text"], correct:"Short and memorable"},
    {question:"Influencer marketing uses:", answers:["People with audience to promote products","In-house only staff","Only print ads","Only coupons"], correct:"People with audience to promote products"}
  ];

  const base_DigitalMarketing = [
    {question:"What is SEO?", answers:["Search Engine Optimization","Social Engagement Operation","Simple Email Offer","Sales Execution Order"], correct:"Search Engine Optimization"},
    {question:"What is PPC?", answers:["Pay Per Click","Profile Photo Creator","Public Post Content","Price Per Customer"], correct:"Pay Per Click"},
    {question:"Email open rate measures:", answers:["Percentage of recipients opening an email","Website load time","Social media followers","Number of blog posts"], correct:"Percentage of recipients opening an email"},
    {question:"What is remarketing?", answers:["Targeting users who visited before","A brand new product","Designing logos only","Printing posters"], correct:"Targeting users who visited before"},
    {question:"What does CTA stand for online?", answers:["Call To Action","Content To Advertise","Customer Tracking App","Click To Apply"], correct:"Call To Action"},
    {question:"A landing page is:", answers:["A focused page for a campaign","The whole website","A PDF file","A social post"], correct:"A focused page for a campaign"},
    {question:"Organic reach means:", answers:["Unpaid visibility","Paid ads only","Email only","Direct mail"], correct:"Unpaid visibility"},
    {question:"Bounce rate refers to:", answers:["Visitors who leave without interacting","People who buy","Newsletter subscribers","App installs"], correct:"Visitors who leave without interacting"},
    {question:"CTR measures:", answers:["Click-through rate on links/ads","Total page visits","Total images","Number of fonts used"], correct:"Click-through rate on links/ads"},
    {question:"A KPI is:", answers:["Key Performance Indicator","Known Press Item","Key Photo Index","Kinetic Price Index"], correct:"Key Performance Indicator"}
  ];

  const base_SocialMediaMarketing = [
    {question:"Which platform is best for B2B marketing?", answers:["LinkedIn","TikTok","Snapchat","Pinterest"], correct:"LinkedIn"},
    {question:"Engagement measures:", answers:["Likes, comments & shares","Number of employees","Website uptime","Ad spend"], correct:"Likes, comments & shares"},
    {question:"Hashtags help to:", answers:["Increase discoverability","Reduce reach","Hide posts","Encrypt content"], correct:"Increase discoverability"},
    {question:"UGC stands for:", answers:["User-Generated Content","Universal Graphic Code","Unique Growth Chart","User Growth Cycle"], correct:"User-Generated Content"},
    {question:"A content calendar helps to:", answers:["Plan posts over time","Design logos","Write code","Create invoices"], correct:"Plan posts over time"},
    {question:"Stories format is usually:", answers:["Short vertical videos/images","Long blog posts only","Print posters","PDF reports"], correct:"Short vertical videos/images"},
    {question:"An influencer is:", answers:["Someone with an audience to promote products","A company CFO","A printer","A typeface"], correct:"Someone with an audience to promote products"},
    {question:"Social listening is:", answers:["Monitoring brand mentions and sentiment","Only replying to emails","Creating logos","Doing print ads"], correct:"Monitoring brand mentions and sentiment"},
    {question:"Viral content tends to be:", answers:["Highly shareable and emotional","Long legal text","Only black and white","Always branded logos"], correct:"Highly shareable and emotional"},
    {question:"A good social caption should be:", answers:["Concise and engaging","Very long and legal","Only hashtags","Blank"], correct:"Concise and engaging"}
  ];

  const base_LogoDesign = [
    {question:"A good logo should be:", answers:["Simple and memorable","Complex and confusing","Always colorful","Never scalable"], correct:"Simple and memorable"},
    {question:"Testing a logo in black and white checks:", answers:["Versatility and readability","Colors only","Font licenses","Printing costs"], correct:"Versatility and readability"},
    {question:"Which is best for scalability?", answers:["Vector formats (SVG/AI)","Low-res JPEGs","GIF only","Bitmap icons only"], correct:"Vector formats (SVG/AI)"},
    {question:"A logo mark is:", answers:["A symbol or icon representing the brand","Full company name only","A font file","A color palette"], correct:"A symbol or icon representing the brand"},
    {question:"A wordmark is:", answers:["A logo based on the company name text","An icon only","A print file","A social post"], correct:"A logo based on the company name text"},
    {question:"Why keep a logo simple?", answers:["Better recognition at small sizes","To increase file size","To confuse users","To hide details"], correct:"Better recognition at small sizes"},
    {question:"Logo spacing area is called:", answers:["Clearspace","Bleed","Kerning","Grid"], correct:"Clearspace"},
    {question:"Responsive logos adjust for:", answers:["Different sizes and contexts","Only print","Only packaging","Only websites"], correct:"Different sizes and contexts"},
    {question:"A brand guideline includes:", answers:["Logo usage, colors, typography","Only pricing","Only shipping details","Only contact names"], correct:"Logo usage, colors, typography"},
    {question:"Trademarking a logo helps to:", answers:["Protect brand identity legally","Make it free","Change colors automatically","Design templates"], correct:"Protect brand identity legally"}
  ];

  const base_CodingBasics = [
    {question:"Which language runs in the browser?", answers:["JavaScript","Python","C++","Java"], correct:"JavaScript"},
    {question:"HTML is used for:", answers:["Structure of web pages","Styling only","Backend logic","Database queries"], correct:"Structure of web pages"},
    {question:"CSS is used for:", answers:["Styling web pages","Storing data","Writing server code","Compiling programs"], correct:"Styling web pages"},
    {question:"Which tool is used to inspect web elements?", answers:["Browser DevTools","MS Paint","Word","Excel"], correct:"Browser DevTools"},
    {question:"What is a variable?", answers:["A storage for data","A type of font","An image format","A print preset"], correct:"A storage for data"},
    {question:"A function is used to:", answers:["Group reusable code","Only style text","Only print images","Open files"], correct:"Group reusable code"},
    {question:"Console.log in JS does:", answers:["Print messages to console","Send email","Change fonts","Upload files"], correct:"Print messages to console"},
    {question:"What is 'responsive' design?", answers:["Layouts adapt to screen sizes","Only desktop designs","Only print layouts","Only mobile apps"], correct:"Layouts adapt to screen sizes"},
    {question:"Git is used for:", answers:["Version control","Graphic design","Printing","Emailing"], correct:"Version control"},
    {question:"A loop repeats code until:", answers:["A condition is met","You stop the computer","The internet disconnects","A font changes"], correct:"A condition is met"}
  ];

  const base_CodingTechniques = [
    {question:"What does 'if' statement do?", answers:["Conditional execution","Creates loops","Stores images","Sets styles"], correct:"Conditional execution"},
    {question:"What is an array?", answers:["List of values","A single number","An email","A font family"], correct:"List of values"},
    {question:"What is debugging?", answers:["Finding and fixing errors","Designing logos","Buying servers","Printing materials"], correct:"Finding and fixing errors"},
    {question:"What is an API?", answers:["Interface for software to communicate","A brand color","An image format","A font"], correct:"Interface for software to communicate"},
    {question:"What is a framework?", answers:["Tools and libraries for developing apps","A paper frame","A printing press","A business plan"], correct:"Tools and libraries for developing apps"},
    {question:"What is refactoring?", answers:["Improving code structure without changing behavior","Changing design colors","Printing process","Shipping code"], correct:"Improving code structure without changing behavior"},
    {question:"What is a pull request?", answers:["A code change proposal in Git","A design tool","A print request","A customer invoice"], correct:"A code change proposal in Git"},
    {question:"What is modular code?", answers:["Code split into independent pieces","A single huge file","Only images","Only text"], correct:"Code split into independent pieces"},
    {question:"What is unit testing?", answers:["Testing small parts of code","Design review","Printing test","Email marketing test"], correct:"Testing small parts of code"},
    {question:"What is continuous integration?", answers:["Automated building/testing on commits","Only manual tests","Design meetings","Printing schedules"], correct:"Automated building/testing on commits"}
  ];

  // Build ALL_QUESTIONS by expanding each base to 100
  const ALL_QUESTIONS = {
    "Graphic Design": expandTo100(base_GraphicDesign, "GD"),
    "Color Combinations": expandTo100(base_ColorCombinations, "CC"),
    "Color Meaning": expandTo100(base_ColorMeaning, "CM"),
    "Brand Color Suggestions": expandTo100(base_BrandColorSuggestions, "BCS"),
    "Marketing & Branding": expandTo100(base_MarketingBranding, "MB"),
    "Digital Marketing": expandTo100(base_DigitalMarketing, "DM"),
    "Social Media Marketing": expandTo100(base_SocialMediaMarketing, "SMM"),
    "Logo Design Principles": expandTo100(base_LogoDesign, "LOGO"),
    "Coding Basics": expandTo100(base_CodingBasics, "CB"),
    "Coding Techniques": expandTo100(base_CodingTechniques, "CT")
  };

  // Expose to global scope
  global.ALL_QUESTIONS = ALL_QUESTIONS;

})(window);
