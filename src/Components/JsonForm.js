import React, {Component} from 'react';
import DynamicForm from './DynamicForm';

class JsonForm extends React.Component {
  state = {
    data: [
      {id: 1, name: 'a', age: '29'},
      {id: 2, name: 'b', age: '30'},
      {id: 3, name: 'c', age: '31'},
    ],
  };
  render() {
    return (
      <div>
        <DynamicForm
          model={[
            {key: 'name', label: 'name', props: {required: true}},
            {key: 'age', label: 'age', type: 'number'},
          ]}
          onSubmit={model => {
            this.onSubmit(model);
          }}
        />
        <pre style={{width: '300px'}}>{JSON.stringify(this.state.data)}</pre>
      </div>
    );
  }
}
