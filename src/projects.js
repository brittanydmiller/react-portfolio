import React from 'react';

export const projects = [
  {
    id: 'zombify',
    classes: 'ruby-on-rails html-and-css javascript-and-jquery copy-editing graphics-and-layout games-and-puzzles tech coursework',
    thumblink: 'https://zomb.herokuapp.com/demo',
    thumbsrc: 'zomb-thumb.jpg',
    thumbalt: 'Zombify app',
    thumbtitle: 'Zombify. Team lead. App design, schema design, Ruby on Rails, JavaScript, jQuery, HTML/CSS, logo design. With Maggy Hillen, Carolyn Atterbury and Andrew Fruth.',
    name: 'Zombify',
    namelink: "https://zomb.herokuapp.com/demo",
    lightbox: false,
    descr: <span>Web app that manages a tag/scavenger-hunt/capture-the-flag game you play in real life using geolocation. Team lead. App design, schema design, Ruby on Rails, JavaScript, jQuery, HTML/CSS, logo design. With Maggy Hillen, Carolyn Atterbury and Andrew Fruth. <a href='https://github.com/brittanydmiller/zombify'>View code on GitHub.</a></span>,
    techs: ['rails', 'js', 'heroku', 'html', 'css', 'postgresql'],
    active: true
  },
  {
    id: 'zsyst',
    classes: 'wordpress html-and-css copy-editing graphics-and-layout tech professional',
    thumblink: 'https://www.zsyst.com',
    thumbsrc: 'ZSystems_thumb.jpg',
    thumbalt: 'Z Systems, inc. Website',
    thumbtitle: 'Z Systems, inc. Website. Wordpress design with HTML and CSS modifications, logo design, graphics, content production and copy editing.',
    name: 'Z Systems, inc.',
    namelink: "https://www.zsyst.com", 
    descr: <span>Website design with Wordpress and HTML/CSS, logo design, graphics, content production and copy editing. (Now copy is created/maintained by the client.)</span>,
    techs: ['wordpress', 'html', 'css', 'photoshop'],
    active: true
  },
  {
    id: 'spencer',
    classes: 'wordpress graphics-and-layout html-and-css copy-editing arts professional',
    thumblink: 'https://spencermcgillicutty.com',
    thumbsrc: 'spencerWP_thumb.jpg',
    thumbalt: 'Spencer McGillicutty Wordpress Website',
    thumbtitle: 'Spencer McGillicutty Wordpress Website. Wordpress design with heavy HTML and CSS modifications, logo design, graphics, content production and copy editing.',
    name: 'Spencer McGillicutty',
    namelink: "https://spencermcgillicutty.com",
    lightbox: false,
    descr: <span>Website design with Wordpress and HTML/CSS, logo design, graphics, content production and copy editing. (Album art by Matt Shoobe. Illustrations by <a href='http://kateyjean.blogspot.com/' target='_blank' rel='noopener noreferrer'> Katey Harvey</a>.) </span>,
    techs: ['wordpress', 'html', 'css', 'photoshop'],
    active: false
  },
  {
    id: 'sets',
    classes: 'sets-and-props arts hobby',
    thumblink:'',
    thumbsrc: 'foreigner-day.jpg',
    thumbalt: 'The Foreigner set',
    thumbtitle: '',
    name: 'Set Dressing',
    namelink: "",
    lightbox: true,
    descr: <span>Various sets I've helped construct or dress. <i>The Foreigner</i> and <i>Museum</i> at The College of Saint Benedict. A music video shoot for Spencer McGillicutty.</span>,
    techs: [],
    active: true,
    gallery_images: [
          { src: 'foreigner-day.jpg', title: 'The Foreigner at The College of Saint Benedict. Sourced all the kitsch, the fishing net, the paddles, the art, the spoon rack, coat rack, letter rack, etc. Helped make the fake fish trophies using a vacuform.' },
          { src: "foreigner15.jpg", title: 'The Foreigner at The College of Saint Benedict. Sourced all the kitsch, the fishing net, the paddles, the art, the spoon rack, coat rack, letter rack, etc. Helped make the fake fish trophies using a vacuform.' },
          { src: "foreigner13.jpg", title: 'The Foreigner at The College of Saint Benedict. Sourced all the kitsch, the fishing net, the paddles, the art, the spoon rack, coat rack, letter rack, etc. Helped make the fake fish trophies using a vacuform.' },
          { src: "foreigner14.jpg", title: 'The Foreigner at The College of Saint Benedict. Sourced all the kitsch, the fishing net, the paddles, the art, the spoon rack, coat rack, letter rack, etc. Helped make the fake fish trophies using a vacuform.' },
          { src: "foreigner16.jpg", title: "Set dressing on walls." },
          { src: "foreigner12.jpg", title: "Dynamite made from wood, paper, string, paint." },
          { src: "larkspur-set.jpg", title: "Larkspur Set (Paint Crew)" },
          { src: "talk-to-me-set.jpg", title: "Talk to Me Like the Rain and Let Me Listen (Paint Crew)" },
          { src: "music_vid2.jpg", title: "Prop Master for Music Video Shoot, Restaurant Scene. Sourced tables, chairs, table cloths, dishware, menus, checks." },
          { src: "spencer-vid2.jpg", title: "Prop Master for Music Video Shoot, Restaurant Scene. Sourced tables, chairs, table cloths, dishware, menus, checks." },
          { src: "menu2.jpg", title: "Prop Master for Music Video Shoot, Restaurant Scene. Created menu." },
          { src: "check2.jpg", title: "Prop Master for Music Video Shoot, Restaurant Scene. Created check." },
          { src: "check_front1.jpg", title: "Prop Master for Music Video Shoot, Restaurant Scene. Created check & end title." },
          { src: "music_vid.jpg", title: "Prop Master for Music Video Shoot, Band Scene" }
        ]
  },
  {
    id: 'zbrochure',
    classes: 'graphics-and-layout copy-editing professional',
    thumbsrc: 'ZBrochure_thumb.jpg',
    thumbalt: 'Company Brochure for Z Systems, inc.',
    thumbtitle: '',
    name: 'Marketing Brochure',
    namelink: "",
    lightbox: true,
    descr: <span>Company brochure for Z Systems, inc. Graphics, layout, content production and copy editing. See PDF <a href='portfolio/ZSystems-2012.pdf' target='_blank' title='Company Brochure for Z Systems, inc. Graphics, layout, content production and copy editing'>here</a>.</span>,
    techs: ['photoshop', 'indesign'],
    active: true,
    gallery_images: [
          { src: 'zbrochure-phys-front.jpg', title: 'Company Brochure for Z Systems, inc. Graphics, layout, content production and copy editing' },
          { src: "zbrochure-phys-back.jpg", title: 'Company Brochure for Z Systems, inc. Graphics, layout, content production and copy editing' }
        ]
  },
  {
    id:'spencerSelf',
    classes: 'arts graphics-and-layout professional',
    thumbsrc: 'spencerSelf_thumb.jpg',
    thumbalt: 'Spencer McGillicutty\'s self-title debut album',
    thumbtitle: '',
    name: 'Spencer McGillicutty Debut Album',
    namelink: '',
    lightbox: true,
    descr: <span>Music album. Vocals and some harmony arrangement. Graphic design and copy editing for disc and album art. Production manager for mastering and album printing. Staining/aging envelopes before printing. Assembling disc packages by hand.</span>,
    techs: ['photoshop'],
    active: true,
    gallery_images: [
          // { src: "SpencerSelfCover.jpg", title: "Spencer McGillicutty's self-titled debut album. Graphic design, copy editing, vocals." },
          { src: "spencer-debut-cover.jpg", title: "Spencer McGillicutty's self-titled debut album. Graphic design, copy editing, vocals. (Front Cover.)" },
          { src: "spencer-debut-disc.jpg", title: "Spencer McGillicutty's self-titled debut album. Graphic design, copy editing, vocals. (Disc.)" },
          { src: "spencer-debut-all.jpg", title: "Spencer McGillicutty's self-titled debut album. Graphic design, copy editing, vocals. (Back Cover.)" },
          { src: "SpencerSelfInside.jpg", title: "Spencer McGillicutty's self-titled debut album. Graphic design, copy editing, vocals. (Inside panel.)" },
          { src: "Spencer-Disc.png", title: "Spencer McGillicutty's self-titled debut album. Graphic design, copy editing, vocals. (Disc.)" },
          { src: "SpencerBackCover.jpg", title: "Spencer McGillicutty's self-titled debut album. Graphic design, copy editing, vocals. (Back Cover.)" }
        ]
  },
  {
    id: 'boernerwell',
    classes: 'html-and-css  graphics-and-layout copy-editing professional',
    thumblink: 'https://boernerwell.com',
    thumbsrc: 'boernerWell_thumb.jpg',
    thumbalt: 'Boerner Well Website',
    thumbtitle:"Boerner Well Website. HTML, CSS, graphics and copy editing.",
    name: 'Boerner Well Co.',
    namelink: "https://boernerwell.com",
    lightbox: true,
    descr: <span>Website design with HTML/CSS, graphics and copy editing.</span>,
    techs: ['html', 'css', 'photoshop'],
    active: false
  },
  {
    id: 'z-fest',
    classes: 'wordpress graphics-and-layout copy-editing tech professional',
    thumblink: 'https://z-fest.com',
    thumbsrc: 'z-fest_thumb.jpg',
    thumbalt: 'Z-Fest Film Festival Website',
    thumbtitle: 'Z-Fest Film Festival   Website. Logo design, content production and editing, graphics. (Maintained by another dev now.)',
    name: 'Z-Fest Film Festival',
    namelink: "https://z-fest.com",
    lightbox: false,
    descr: <span>Logo design, website content production and editing, Wordpress upkeep, graphics. (Content now maintained by someone else.)</span>,
    techs: [ 'wordpress','html','css', 'photoshop'],
    active: true
  },
  {
    id: 'leela',
    classes: 'costume arts hobby',
    thumblink:'',
    thumbsrc: 'leela_thumb.jpg',
    thumbalt: 'Leela Cosplay Costume for CONvergence Exhibition',
    thumbtitle: '',
    name:'Leela Cosplay Costume (Futurama)',
    namelink: '',
    lightbox: true,
    descr: <span>Leela Costume (from Futurama) -- Displayed at CONvergence Costume Exhibition. Ponytail wig constructed from 2 wigs. Buckram Eyeball with Latex eyelid and wire eyelashes. Movable pupil on fishing line and pulleys. Gauntlet constructed from rubber galoshes, knee pads, and moldable foam, with LED lights and cell phone storage inside. Moonboots painted with PlastiDip, with added foam buckles. Ray gun made from water pistol, hair stick, and moldable foam for the accents.</span>
    // <div class='videos'>
    //   '<video width='320' height='240' controls>
    //     <source src='videos/leela-eye-rotated.mov' type='video/mp4'>
    //     Your browser does not support the video tag.
    //   </video>
    //   <video width=' height='320' controls>
    //  <source src='videos/leela-eye-hand.mp4' type='video/mp4'>
    //     Your browser does not support the video tag.
    //   </video>
    //   <video width=' height='320' controls>
    //     <source src='videos/leela-gauntlet-lights.mp4' type='video/mp4'>
    //     Your browser does not support the video tag.
    //   </video>
    //   <video width=' height='320' controls>
    //     <source src='videos/leela-gauntlet-storage2.mp4' type='video/mp4'>
    //     Your browser does not support the video tag.
    //   </video>
    // </div>"
           ,
    techs: [],
    active: true,
    gallery_images: [
          { src: 'leela11.jpg', title: 'Leela Cosplay Costume for CONvergence Exhibition' },
          { src: "leela3.jpg", title: "Moonboots painted with PlastiDip, with added foam buckles. Ray gun made from water pistol, hair stick, and moldable foam for the accents." },
          { src: "leela5.jpg", title: "Ponytail wig constructed from 2 wigs." },
          { src: "leela_stage.jpg", title: "Displayed at CONvergence Costume Exhibition." },
          { src: "leela-gun.jpg", title: "Ray gun made from water pistol, hair stick, and moldable foam for the accents." },
          { src: "leela-eye1.jpg", title: "Buckram Eyeball with Latex eyelid and wire eyelashes. Movable pupil on fishing line and pulleys. " },
          { src: "leela-eye.jpg", title: "Buckram Eyeball with Latex eyelid and wire eyelashes. Movable pupil on fishing line and pulleys. " },
          { src: "leela-gauntlet.jpg", title: "Gauntlet constructed from rubber galoshes, knee pads, and moldable foam, with LED lights and cell phone storage inside." }
        ]
  },   
 {
    id: 'miscCostumes',
    classes: 'costume arts hobby',
    thumblink:'',
    thumbsrc: 'wolverine_thumb.jpg',
    thumbalt: 'Wolverine Costume',
    thumbtitle: '',
    name: 'Other Costumes',
    namelink: '',
    lightbox: true,
    descr: <span>Various other costumes I've created: Wolverine, Bilbo, Weird Al Yankovic, Han Solo, Princess Leia, Disney's Robin Hood (the fox), Itchy & Scratchy, Daria, Harry Potter's Rita Skeeter and Molly Weasley, and others.</span>,
    techs: [],
    active: true,
    gallery_images: [
          { src: 'wolverine_threat.jpg', title: "Wolverine. Claws made from spikes, foam, and duct tape. Fake side burns with spirit gum. Dogtags made from painted cardboard."},
          { src: "bilbo2.jpg", title: "Bilbo Baggins. Hobbit ears, hairy feet. Thrifted clothing." },
          { src: "weird_al_yankovic_accordion.jpg", title: "Weird Al Yankovic. All pieces thrifted. Popped the lenses out of some sunglasses and painted them. Already had an accordion!" },
          { src: "barriss-and-kit.jpg", title: "Barriss Offee, seen here with Kit Fisto. Made a cream face paint out of eyeshadow and chapstick. Sewed the blue hooded cloak." },
          { src: "han_solo_solo.jpg", title: "Han Solo. Custom vest created by disassembling a thrifted shirt and re-hemming. Blood stripe temporarily added to pants. Custom blaster and gun belt. " },
          { src: "han-belt-left.jpg", title: "Han Solo. Gun belt made by connecting a belt and a purse strap. Used a corner of the purse for the holster." },
          { src: "han-belt-front.jpg", title: "Han Solo. Gun belt made by connecting a belt and a purse strap. Used a corner of the purse for the holster." },
          { src: "han-belt-right.jpg", title: "Han Solo. Gun belt accents are pieces of a hair dryer and curling iron I thrifted." },
          { src: "han-blaster.jpg", title: "Han Solo. (Not a replica of Han's personal blaster). Assembled overnight by combining pieces from a mini hair dryer and a curling iron with black duct tape." },
          { src: "han-blaster-front.jpg", title: "Han Solo. (Not a replica of Han's personal blaster). Assembled overnight by combining pieces from a mini hair dryer and a curling iron with black duct tape." },
          // <!-- { src: "han-vest-crop.jpg", title: "Han Solo. Custom vest, blaster and gun belt."], - }>
          { src: "han_solo2.jpg", title: "Han Solo. Custom vest created by disassembling a thrifted shirt and re-hemming. Blood stripe temporarily added to pants. Custom blaster and gun belt. " },
          { src: "leia-full.jpg", title: "Princess Leia. Gown made in one night from bedsheets, staples, duct tape. (Blaster and belt borrowed.) Won first prize in the dorm costume contest." },
          // <!-- { src: "leia.jpg", title: "Princess Leia. Gown made in one night from bedsheets, staples, duct tape. (Blaster and belt borrowed.) Won first prize in the dorm costume contest."],- }>
          { src: "robin_hood.jpg", title: "Disney Animated Robin Hood (with Kaa and Maid Marian). Cut and altered thrifted pieces. Crafted fox ears and affixed to borrowed hat." },
          { src: "itchy_scratchy1_crop.jpg", title: "Made both Itchy and Scratchy costumes - created gloves, clothes with purple bellies, thrifted and painted the mouse headpiece, created the cat headpiece." },
          // <!-- { src: "itchy-scratchy-cute.jpg", title: ""], - }>
          { src: "itchy-scratchy.jpg", title: "Made both Itchy and Scratchy costumes - created gloves, clothes with purple bellies, thrifted and painted the mouse headpiece, created the cat headpiece." },
          { src: "la-la-La-la-la.jpg", title: "Daria Morgendorffer. Thrifted all pieces. Popped the lenses out of some round sunglasses." },
          { src: "rita-skeeter2.jpg", title: "Rita Skeeter for the Harry Potter Premiere. All pieces thrifted." },
          // <!-- { src: "rita_skeeter.jpg", title: "Rita Skeeter (from Harry Potter). All pieces thrifted."], - }>
          { src: "harry-potter.jpg", title: "Molly Weasley costume for the Harry Potter Premiere. All pieces thrifted/found." },
          { src: "molly-weasley.jpg", title: "Molly Weasley costume for the Harry Potter Premiere. All pieces thrifted/found." },
          { src: "jocks.jpg", title: "CONvergence Group Costume for the theme 'Villains'. We went meta and showed up to the nerdfest as Jocks and Cheerleaders. Sourced and printed the Cheerleader uniforms and Jocks jerseys. Reception was confused and then celebratory. " },
          { src: "zombie_dorothy.jpg", title: "Zombie Dorothy. Part of a full zombie Oz crew for the pub crawl. Included a basket with a Toto CD in it. Seen here talking to Zombie Billy Mays from the OxiClean and ShamWow commercials." },
          { src: "pilot_gang_crop.jpg", title: "Pilot Costume with handmade goggles. Coat and scarves were thrifted. Safari costume on the bearded fellow as well -- all pieces thrifted." },
        ]
  },
 {
    id: 'props',
    classes: 'sets-and-props arts hobby',
    thumblink:'',
    thumbsrc: 'muppets_thumb.jpg',
    thumbalt: '',
    thumbtitle: '',
    name: 'Props',
    namelink: '',
    lightbox: true,
    descr: <span>Various props I've constructed. Muppets and giant foam letters for photo shoots and music videos. Prop rifles for <i>The Foreigner</i>. Body casts for <i>Museum</i>.</span>,
    techs: [],
    gallery: ['./menu_text.pdf','./menu_label.pdf','./carnaby_checks.pdf'],
    active: true,
    gallery_images: [
          { src: "muppets_construction.jpg", title: "Muppets under construction. Made with paper mache, foam, glue, cardboard, ping-pong balls, and various felted fabrics. Led by Mitchell Johnson and Gwen Wasmund. Made with Jerry McMurray and Oanh Vu." },
          { src: "chin_muppet.jpg", title: "Cro Magnon Muppet has a large cardboard chin." },
          { src: "finished_muppets.jpg", title: "Some faces are taking shape." },
          { src: "muppets-pile900.jpg", title: "Pompous Mozart Muppet has a body!" },
          { src: "muppets-bodies900.jpeg", title: "Christmas Muppets with costumes." },
          { src: "G-A-M-E-S-compressed-600.jpg", title: "Large Prop Letters. Constructed from dense styrofoam. Used in a photoshoot for a new album cover for our Japanese release with Fastcut Records. With Jerry McMurray." },
          { src: "spencer_japan_album_cover.jpg", title: "Large Prop Letters. Constructed from dense styrofoam. Used in a photoshoot for a new album cover for our Japanese release with Fastcut Records. With Jerry McMurray." },
          { src: "gun1.jpg", title: "Making rifles for The Foreigner from wood and piping." },
          { src: "gun2.jpg", title: "Making rifles for The Foreigner from wood and piping." },
          { src: "gun3.jpg", title: "Making rifles for The Foreigner from wood and piping." },
          { src: "gun4.jpg", title: "Making rifles for The Foreigner from wood and piping." },
          { src: "foreigner-guns.jpg", title: "Prop rifles onstage in The Foreigner." },
          { src: "bodycast1.jpg", title: "Taking casts of bodies to use as the Art in Museum." },
          { src: "bodycast2.jpg", title: "Taking casts of bodies to use as the Art in Museum." },
          { src: "bodycast3.jpg", title: "Taking casts of bodies to use as the Art in Museum." },
          { src: "bodycast4.jpg", title: "Taking casts of bodies to use as the Art in Museum." }
        ]
  },
  {
    id: 'spencerGames',
    classes: 'arts graphics-and-layout professional',
    thumblink:'',
    thumbsrc: 'spencerGames_thumb.jpg',
    thumbalt: 'Spencer McGillicutty\'s second album, Games',
    thumbtitle: '',
    name: 'Spencer McGillicutty\'s Games',
    namelink: '',
    lightbox: true,
    descr: <span>Music album. Vocals and some harmony arrangement. Recording and mixing in Pro Tools. Graphic design and copy editing for disc and album art. Production manager for mastering and album printing. Was released in Japan on Fastcut Records.</span>,
    techs: ['photoshop', 'indesign'],
    active: true,
    gallery_images: [
          { src: "Games500.jpg", title: "Spencer McGillicutty's second album, Games. Graphic design, copy editing, vocals." },
          { src: "spencer_japan_album_cover.jpg", title: "Promo photo for the Japanese release on Fastcut Records."},
          { src: "spencerGamesDisc.jpg", title: "Spencer McGillicutty's second album, Games. Graphic design, copy editing, vocals. (Disc.)" },
         ]
  },
  {
    id: 'spencer',
    classes: 'graphics-and-layout html-and-css copy-editing arts professional',
    thumblink: 'portfolio/spencerstatic/index.html',
    thumbsrc: 'spencerWP_thumb.jpg',
    thumbalt: 'Spencer McGillicutty Website',
    thumbtitle: 'Spencer McGillicutty Website. Design with HTML and CSS modifications, logo design, graphics, content production and copy editing.',
    name: 'Spencer McGillicutty Website',
    namelink: 'portfolio/spencerstatic/index.html',
    lightbox: false,
    descr: <span>Website design with and HTML/CSS, logo design, graphics, content production and copy editing. (Album art by Matt Shoobe. Illustrations by <a href='http://kateyjean.blogspot.com/' target='_blank' rel='noopener noreferrer'> Katey Harvey</a>.) </span>,
    techs: ['html', 'css', 'photoshop'],
    active: true
},
{
    id: 'swag',
    classes: 'graphics-and-layout professional',
    thumblink:'',
    thumbsrc: 'z-festShirts_thumb.jpg',
    thumbalt: 'Z-Fest T-shirt',
    thumbtitle: '',
    name: 'Swag',
    namelink: '',
    lightbox: true,
    descr: <span>Graphic design for film festival shirt, band shirts and badges.</span>,
    techs: ['illustrator'],
    active: true,
    gallery_images: [
          { src: "t-shirtFront.png", title: "Z-Fest T-shirt (Front). Graphic design." },
          { src: "t-shirtBack.png", title: "Z-Fest T-Shirt (Back). Graphic design." },
          { src: "front-shirt.jpg", title: "Z-Fest T-Shirt (Front). Graphic design." },
          { src: "back-shirt.jpg", title: "Z-Fest T-Shirt (Back). Graphic design." },
          { src: "spencertee.jpg", title: "Band T-Shirt. Hand drawn, then submitted for print via Illustrator." },
          { src: "spencer-buttons.jpg", title: "Band badges. Combination of Hand Drawing and Illustrator." }
        ]
},          
 {
    id: 'zshare',
    classes: 'graphics-and-layout copy-editing professional',
    thumblink:'',
    thumbsrc: 'z-shareCard_thumb.jpg',
    thumbalt: 'Z-Share product card for Z Systems, inc.',
    thumbtitle: '',
    name: 'Marketing Cards',
    namelink: '',
    lightbox: true,
    descr: <span>Product and Service cards offering integrated server products and equipment rental services. Business Cards. Logo design and graphics.</span>,
    techs: ['photoshop', 'indesign'],
    active: true,
    gallery_images: [
          { src: "ZSharedark.jpg", title: "Z-Share product card for Z Systems, inc. (Front.) Copy editing, graphic design." },
          { src: "zshare-phys-back.jpg", title: "Z-Share product card for Z Systems, inc. (Back.) Copy editing, graphic design." },
          { src: "Z-Share-card.jpg", title: "Z-Share product card for Z Systems, inc. (Front.) Copy editing, graphic design." },
          { src: "Z-Share-card-back-portfoliover.png", title: "Z-Share product card for Z Systems, inc. (Back.) Copy editing, graphic design." },
          { src: "zrentals-front.jpg", title: "Rentals card product card for Z Systems, inc. (Front.) Copy editing, graphic design." },
          { src: "zrentals-back.jpg", title: "Rentals card product card for Z Systems, inc. (Back.) Copy editing, graphic design." },
          { src: "CeoBizCardDark.jpg", title: "Business Cards for Z Systems, inc. Graphic design" },
          { src: "WeRentCard.jpg", title: "Business cards for Z Systems, inc. (Rental sticker on back). Graphic Design." },
          { src: "spencer_bizcard.jpg", title: "Business cards for Spencer McGillicutty. Layout." },
          { src: "spencer_bizcard_back.jpg", title: "Business cards for Spencer McGillicutty. Layout." }
        ]
  },
  {
    id: 'z-share-vent',
    classes: 'graphics-and-layout professional',
    thumblink:'',
    thumbsrc: 'z-share_thumb.jpg',
    thumbalt: 'Z-Share vent panel',
    thumbtitle: '',
    name: 'Z-Share Vent panel',
    namelink: '',
    lightbox: true,
    descr: <span>Front vent panel for Z Systems' custom server product. Panel design in Illustrator.</span>,
    techs: ['illustrator'],
    active: true,
    gallery_images: [
          { src: 'z-shareFull.jpg', title: "Z-Share vent panel. Product design" }
        ]
  },
 {
    id: '"visualArt',
    classes: 'arts hobby',
    thumblink:'',
    thumbsrc: 'tiger_thumb.jpg',
    thumbalt: 'Tiger painting',
    thumbtitle: '',
    name: 'Visual Art',
    namelink: '',
    lightbox: true,
    descr: <span>Acrylic paintings, pencil drawings, ink drawings of things I like.</span>,
    techs: [],
    active: true,
    gallery_images: [
          { src: 'tiger.jpg', title: "Tiger. Acrylic paints"},
          { src: "diver.jpg", title: "Diver. Ink." },
          { src: "lighthouse.jpg", title: "Lighthouse. Acrylic paints." },
          { src: "monkeys.jpg", title: "Snow Monkeys. Ink." },
          { src: "belma2.gif", title: "Belma Treewalker. Pencil." },
          { src: "BlueEyes.jpg", title: "Blue Eyes White Dragon Yugioh. Ink." },
          { src: "mygoliath.jpg", title: "Goliath from Gargoyles. Pencil." },
          { src: "AllTheHappyLegs.jpg", title: "Album Cover Mockup. Ink and Marker, with some Illustrator for the mockup." }
        ]
  },
  {
    id: 'forecash',
    classes: 'html-and-css javascript-and-jquery ruby-on-rails tech hobby',
    thumblink: 'https://forecash.herokuapp.com/',
    thumbsrc: 'forecash_thumb.png',
    thumbalt: 'ForeCash',
    thumbtitle: 'Team lead. App design, Ruby on Rails, JavaScript, HTML/CSS. One-day hackathon project. With Chris Yancey, Nick Meehan, Andrew Fruth, and David Stavis.',
    name: 'Forecash',
    namelink: "https://forecash.herokuapp.com/",
    lightbox: '',
    descr: <span>Web app to forecast your cashflow when investigating new purchases or hires. Team lead. App design, Ruby on Rails, JavaScript, HTML/CSS. One-day hackathon project. With Chris Yancey, Nick Meehan, Andrew Fruth, and David Stavis. <a href='https://github.com/cyancey/forecash'>View code on GitHub.</a></span>,
    techs: ['rails', 'html', 'css', 'js', 'heroku', 'postgresql'],
    active: true
  },
  {
    id: 'miller-tax',
    classes: 'html-and-css javascript-and-jquery wordpress tech professional',
    thumblink: 'https://www.zmillercpa.com/',
    thumbsrc: 'receipts_thumb.jpg',
    thumbalt: 'ZMillerCPA',
    thumbtitle: 'Design, Wordpress, light JavaScript, HTML/CSS.',
    name: 'Miller Tax & Consulting',
    namelink: "https://www.zmillercpa.com/",
    lightbox: '',
    descr: <span>Light Wordpress website for a small family-owned tax business. Design, Wordpress, light JavaScript, HTML/CSS.</span>,
    techs: ['wordpress','html', 'css', 'js'],
    active: true
  },
 {
    id: 'connect4',
    classes: 'html-and-css javascript-and-jquery tech games-and-puzzles coursework',
    thumblink: 'https://dbcconnectfour.herokuapp.com/',
    thumbsrc: 'Connect4-thumb.jpg',
    thumbalt: 'DBC Connect Four',
    thumbtitle: 'DBC Connect Four. Website design with HTML/CSS, drag and drop and MVC JavaScript. With Aaron Wertman, Phil Wittig, Rex Suter, and Drew West. (Design parody of DBC Connect)',
    name: 'DBC Connect Four',
    namelink: "https://secret-fjord-30184.herokuapp.com/",
    lightbox: '',
    descr: <span>Website design with HTML/CSS, drag and drop and MVC JavaScript. With Aaron Wertman, Phil Wittig, Rex Suter, and Drew West. (Design parody of <a href='https://dbcconnect.herokuapp.com' target='_blank' rel='noopener noreferrer'>DBC Connect</a>.) <a href='https://github.com/brittanydmiller/connectfour'>View code on GitHub.</a></span>,
    techs: ['js', 'html', 'css', 'heroku'],
    active: true
  },
 {
    id: 'horcruxes',
    classes: 'games-and-puzzles hobby',
    thumblink: 'https://docs.google.com/forms/d/1L6904-ON0ZKC2OzYQXWmL7-lwF_oPN7OcXS-RkAdBd8/edit',
    thumbsrc: 'hogwarts_thumb.jpg',
    thumbalt: 'hogwarts castle',
    thumbtitle: 'Destroy the Horcruxes',
    name: 'Destroy the Horcruxes',
    namelink: "https://docs.google.com/forms/d/1L6904-ON0ZKC2OzYQXWmL7-lwF_oPN7OcXS-RkAdBd8/edit",
    lightbox: '',
    descr: <span>A motivational tool to allow friends to band together to read the story of finding and destroying the horcruxes from Harry Potter. <a href='https://docs.google.com/forms/d/1L6904-ON0ZKC2OzYQXWmL7-lwF_oPN7OcXS-RkAdBd8/edit'>Report exercise progress here</a> every day and monitor progress through the <a href='https://docs.google.com/spreadsheets/d/1_x3G9rPDG4qfVoQAFcZhM3eOh6LnDbOzY6LV1bynCoM/edit#gid=1281931410'>story here</a>. View the Encounter tab, the Team tab, the Stats tab to see the team\'s progress through the story. View the Library tab to peek at the full story. Built with Google Sheets programming and Google Forms.</span>,
    techs: ['gsuite'],
    active: true
  },
  {
    id: 'baltimore',
    classes: 'wordpress games-and-puzzles copy-editing hobby',
    thumblink: 'https://baltimoreclues.home.blog/2018/12/16/the-journey-begins/',
    thumbsrc: 'baltimore_skyline.jpg',
    thumbalt: 'Baltimore Clues Scavenger Hunt',
    thumbtitle: 'Baltimore Clues Scavenger Hunt. Wordpress design, puzzle design, content production and copy editing.',
    name: 'Baltimore Clues',
    namelink: "https://baltimoreclues.home.blog/2018/12/16/the-journey-begins/",
    lightbox: '',
    descr: <span>A fun Baltimore Scavenger Hunt for the traveler with a free afternoon. Website construction with Wordpress and HTML/CSS, riddle/content production and copy editing. </span>,
    techs: ['wordpress'],
    active: true
  },
  {
    id: 'datasafe',
    classes: 'graphics-and-layout professional',
    thumblink:'',
    thumbsrc: 'DataSafe_thumb.jpg',
    thumbalt: 'Data Safe Product Label for Z Systems, inc.',
    thumbtitle: '',
    name: 'DataSafe Product Label',
    namelink: '',
    lightbox: true,
    descr: <span>Product Label for Z Systems, inc. Graphic design.</span>,
    techs: ['photoshop'],
    active: false
  },
  {
    id: 'gendergrads',
    classes: 'graphics-and-layout html-and-css javascript-and-jquery coursework',
    thumblink: 'portfolio/gendergrads2/index.html',
    thumbsrc: 'genderGrads_thumb.jpg',
    thumbalt: '',
    thumbtitle: 'GenderGrads.org Website. Web Design I &amp; Web Dev II Project: HTML, CSS, JavaScript, jQuery, graphics. Content borrowed from around the web for educational purposes.',
    name: 'GenderGrads.org',
    namelink: "portfolio/gendergrads2/index.html",
    lightbox: false,
    descr: <span>Web Design I &amp; Web Dev II Project: HTML, CSS, JavaScript, jQuery, graphics. Content borrowed from around the web for educational purposes.</span>,
    techs: ['js', 'html', 'css', 'photoshop'],
    active: false
  },
  {
    id: 'processbook',
    classes: 'graphics-and-layout coursework',
    thumblink: 'portfolio/processbook/processbook-final.pdf',
    thumbsrc: 'processBook_thumb.png',
    thumbalt: 'GenderGrads Design Process Book',
    thumbtitle: 'GenderGrads Design Process Book. Web Design I Project: Graphics, layout, sketches, wireframes, site diagram.',
    name: 'Design Process Book',
    namelink: "portfolio/processbook/processbook-final.pdf",
    lightbox: false,
    descr: <span>Web Design I Project: Graphics, layout, sketches, wireframes, site diagram.</span>,
    techs: ['indesign'],
    active: true
  },
  {
    id: 'typography',
    classes: 'graphics-and-layout coursework',
    thumblink:'',
    thumbsrc: 'typography_thumb.png',
    thumbalt: 'Typography Exercises',
    thumbtitle: '',
    name: 'Typography Exercises',
    namelink: '',
    lightbox: true,
    descr: <span>Web Design I Project: Graphic design. Content borrowed from around the web for educational purposes.</span>,
    techs: ['photoshop'],
    active: true,
    gallery_images: [
          { src: 'typographyHome.png', title: "Typography Exercises. Web Design I Project: Graphic design. Content borrowed from around the web for educational purposes." },
          { src: "typographyP5.png", title: "Typography Exercises. Web Design I Project: Graphic design. Content borrowed from around the web for educational purposes." },
          { src: "typographyP2.png", title: "Typography Exercises. Web Design I Project: Graphic design. Content borrowed from around the web for educational purposes." },
          { src: "typographyP3.png", title: "Typography Exercises. Web Design I Project: Graphic design. Content borrowed from around the web for educational purposes." },
          { src: "typographyP4.png", title: "Typography Exercises. Web Design I Project: Graphic design. Content borrowed from around the web for educational purposes." }
        ]
  },
  {
    id: 'our-garden-post',
    classes: 'html-and-css graphics-and-layout coursework',
    thumblink: 'portfolio/ourgardenpost/index.html',
    thumbsrc: 'gardenpost_thumb.jpg',
    thumbalt: 'Our Garden Post (Webpage)',
    thumbtitle: 'Web Design I Project: HTML, CSS, graphics. Content borrowed from the web for educational purposes.',
    name: 'Our Garden Post',
    namelink: "portfolio/ourgardenpost/index.html",
    lightbox: false,
    descr: <span>Web Design I Project: HTML, CSS, graphics. Content borrowed from the web for educational purposes.</span>,
    techs: ['html', 'css', 'photoshop'],
    active: true
  },
  {
    id: 'dingn',
    classes: 'html-and-css javascript-and-jquery tech hobby',
    thumblink: 'portfolio/dingn/index.html',
    thumbsrc: 'ding_thumb.png',
    thumbalt: 'Ding\\n',
    thumbtitle: 'Ding\\n. App design, Vanilla JavaScript, HTML/CSS.',
    name: 'Ding\\n',
    namelink: "portfolio/dingn/index.html",
    lightbox: false,
    descr: <span>Ding\n wraps your lines by inserting custom linebreaks (\n) at just the right spots! Seems simple, and could easily be handled with one line of CSS, but Ding\n does it 'manually' using vanilla JavaScript. This was a code challenge -- I don't claim Ding\n is a useful app. <a href='https://github.com/brittanydmiller/js-paragraph-fitter'>View code on GitHub</a>.</span>,
    techs: ['js', 'html', 'css'],
    active: false
  },
  {
    id: 'gollum',
    classes: 'javascript-and-jquery games-and-puzzles tech coursework',
    thumblink: 'portfolio/gollum/index.html',
    thumbsrc: 'gollum_thumb.jpg',
    thumbalt: 'Gollum\'s Challenge',
    thumbtitle: 'Gollum\'s Challenge. Web Dev II Project: A JavaScript Week[0] Riddle Game.',
    name: 'Gollum\'s Challenge',
    namelink: "portfolio/gollum/index.html",
    lightbox: false,
    descr: <span>Web Dev II Project: A Beginner's JavaScript Riddle Game.</span>,
    techs: ['js'],
    active: true
  }
]
   
 