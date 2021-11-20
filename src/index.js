wp.blocks.registerBlockType('ourplugin/are-you-paying-attention', {
  title: 'Are You Paying Attention?',
  icon: 'smiley',
  category: 'common',
  attributes: {
    skyColor: { type: 'string' },
    // skyColor: { type: 'string', source: 'text', selector: './skyColor' },
    // 2 tapaa säilöä dataa htmllänä
    // string of text source of thruth
    // tai sitten classic
    grassColor: { type: 'string' },
  },
  // näihin voi säilöä dataa jotka passataan propseina
  edit: function (props) {
    function updateSkyColor(event) {
      // btw voi nimetä miten vaan fun fact
      props.setAttributes({ skyColor: event.target.value });
    }
    function updateGrassColor(event) {
      props.setAttributes({ grassColor: event.target.value });
    }

    return (
      <div>
        <input type="text" placeholder="sky color" onChange={updateSkyColor} />
        <input
          type="text"
          placeholder="grass color"
          onChange={updateGrassColor}
        />
      </div>
    );
  },
  save: function (props) {
    return null;
  },
});

// tallenna string - default wp way

// wp.blocks.registerBlockType('ourplugin/are-you-paying-attention', {
//     title: 'Are You Paying Attention?',
//     icon: 'smiley',
//     category: 'common',
//     attributes: {
//       skyColor: { type: 'string' },
//       // skyColor: { type: 'string', source: 'text', selector: './skyColor' },
//       // 2 tapaa säilöä dataa htmllänä
//       // string of text source of thruth
//       // tai sitten classic
//       grassColor: { type: 'string' },
//     },
//     // näihin voi säilöä dataa jotka passataan propseina
//     edit: function (props) {
//       function updateSkyColor(event) {
//         // btw voi nimetä miten vaan fun fact
//         props.setAttributes({ skyColor: event.target.value });
//       }
//       function updateGrassColor(event) {
//         props.setAttributes({ grassColor: event.target.value });
//       }

//       return (
//         <div>
//           <input type="text" placeholder="sky color" onChange={updateSkyColor} />
//           <input
//             type="text"
//             placeholder="grass color"
//             onChange={updateGrassColor}
//           />
//         </div>
//       );
//     },
//     save: function (props) {
//       return null;
//     },
//     // llog mesta
//     // bad mesta, jos meinaa päivittää
//     deprecated: [
//       {
//         attributes: {
//           skyColor: { type: 'string' },
//           grassColor: { type: 'string' },
//         },
//         save: function (props) {
//           return (
//             <div>
//               <p>
//                 KASDKDAKD grass is {props.attributes.grassColor}. sky is{' '}
//                 <span className="skyColor">{props.attributes.skyColor}</span>{' '}
//               </p>
//             </div>
//           );
//         },
//       },

//       {
//         attributes: {
//           skyColor: { type: 'string' },
//           grassColor: { type: 'string' },
//         },
//         save: function (props) {
//           return (
//             <div>
//               <p>
//                 grass is {props.attributes.grassColor}. sky dasd is{' '}
//                 <span className="skyColor">{props.attributes.skyColor}</span>{' '}
//               </p>
//             </div>
//           );
//         },
//       },
//     ],
//   });

// spanneilla voi

// return wp.element.createElement(
//     'h3',
//     null,
//     'hello, this is from the admin editor screen'
//   );
//   // createElement(type element, attributes, content)
