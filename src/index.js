import './index.scss';
// ei tarvi installaa sass
import {
  TextControl,
  Flex,
  FlexBlock,
  FlexItem,
  Button,
  Icon,
} from '@wordpress/components';
// custom wp package way to import
// autoimportaa reactin

wp.blocks.registerBlockType('ourplugin/are-you-paying-attention', {
  title: 'Are You Paying Attention?',
  icon: 'smiley',
  category: 'common',
  attributes: {
    question: { type: 'string' },
    answers: { type: 'array', default: ['red', 'blue'] },
  },
  // näihin voi säilöä dataa jotka passataan propseina
  edit: EditComponent,
  save: function (props) {
    return null;
  },
});

function EditComponent(props) {
  function updateQuestion(value) {
    props.setAttributes({ question: value });
  }

  function deleteAnswer(indexToDelete) {
    const newAnswers = props.attributes.answers.filter(function (x, index) {
      return index !== indexToDelete;
    });
    props.setAttributes({ answers: newAnswers });
  }

  return (
    <div className="paying-attention-edit-block">
      <TextControl
        label="Question: "
        value={props.attributes.question}
        onChange={updateQuestion}
        style={{ fontSize: '20px' }}
      />
      <p style={{ fontSize: '13px', margin: '20px 0 8px 0' }}>Answers: </p>
      {props.attributes.answers.map((answer, index) => {
        return (
          <Flex>
            <FlexBlock>
              <TextControl
                value={answer}
                onChange={(newValue) => {
                  const newAnswers = props.attributes.answers.concat([]);
                  newAnswers[index] = newValue;
                  props.setAttributes({ answers: newAnswers });
                }}
              ></TextControl>
            </FlexBlock>

            <FlexItem>
              <Button>
                <Icon className="mark-as-correct" icon="star-empty" />
              </Button>
            </FlexItem>

            <FlexItem>
              <Button
                isLink
                className="attention-delete"
                onClick={() => deleteAnswer(index)}
              >
                Delete
              </Button>
            </FlexItem>
          </Flex>
        );
      })}
      <Button
        isPrimary
        onClick={() => {
          props.setAttributes({
            answers: props.attributes.answers.concat(['']),
          });
        }}
      >
        Add another answer
      </Button>
    </div>
  );
}

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
