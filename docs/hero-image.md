# Homepage hero image

Current hero asset: `public/hero-container-ship-v6.webp` (1536 × 900, WebP quality 95).

Re-encoded directly from the user-supplied JPEG on 2026-10-14, at its native resolution. The previous v5 asset was 1920 × 1125 despite the source being 1536 × 900 and showed visible compression damage in the wake and container details. Do not use v5 as an encoding source or upscale the image to claim higher detail.

The CSS background and image preload both reference v6 so browsers fetch the same fresh asset. Existing responsive positioning, overlays and sharing metadata are unchanged. Native source resolution still limits sharpness on large/high-density displays; a genuinely higher-resolution source is needed for more detail there.

## Previous version (v4)

Asset: `public/hero-container-ship-v4.jpg` (1536 × 904, approximately 615 KiB).

Selected and supplied by the user on 2026-09-30 as `IMG_1004.jpeg`. The JPEG is copied unchanged. `src/styles.css` controls the responsive crop; `index.html` preloads the image and references it in sharing metadata.

## Previous version (v2)

Asset: `public/hero-container-ship-v2.webp` (1672 × 941, approximately 262 KiB).

Created on 2026-09-30 with the built-in ImageGen tool. This is a generated illustrative maritime scene, not a photograph of KAO's fleet or a particular port.

The generated PNG was exported to WebP for website delivery. `src/styles.css` controls the desktop and mobile crop; `index.html` preloads the image and references it in sharing metadata. Update the sharing URLs if the public website hostname changes.

## Generation prompt

Use case: ads-marketing. Asset type: photorealistic hero background for a premium international container freight logistics company website. Create a beautiful believable high-resolution wide landscape photograph, 16:9 composition, 2560x1440 or similar. Drone photography at a low elevated three-quarter angle of a modern ocean-going container ship underway close to a container port in soft late-afternoon light. Ship in the RIGHT HALF, bow oriented toward lower right, many realistically aligned intermodal shipping containers in muted rust, ivory and blue. Deep navy and teal ocean with natural small ripples, subtle white wake, distant port cranes and low coastline at the upper-right horizon, restrained soft warm sunset highlights, blue sky above. LEFT HALF must be calm dark blue open water and soft sky with spacious low-detail negative space for a large white website headline occupying x=8%-50%, y=30%-70%. Horizon at upper quarter, ship primarily between x=58%-95% and y=35%-75%, ship large enough to read as container freight on mobile when the right side is cropped. Refined natural editorial photography, cinematic but realistic, crisp ship details, understated premium palette, no excessive orange, no fantasy, no surreal geometry, no illustration, no 3D look, no graphic overlays, no borders, no visible company names, no readable words or logos, no text, no watermark. Render the IMAGE ONLY, not a website mockup.
