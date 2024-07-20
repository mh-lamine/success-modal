# custom-success-modal

`custom-success-modal` is a simple and customizable modal component for React apps. It allows you to display modals with custom title and content, and also includes a close button.

## Installation

Install the package with npm:

```bash
npm install custom-success-modal
```

## Usage

The `Modal` component accepts the following props:

- **title** (string): The title text displayed at the top of the modal. Default is an empty string.
- **content** (string): The content text displayed in the body of the modal. Default is an empty string.
- **closeModal** (function): The function to close the modal, typically changes the state controlling the modal's visibility.

### Example:

```javascript
<Modal 
  title="Success" 
  content="Your operation was successful!" 
  closeModal={() => setIsOpen(false)} 
/>
```

## Example Application

Here's a full example application integrating the `custom-success-modal` component:

```javascript
import { useState } from React
import Modal from 'custom-success-modal';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      {isOpen && (
        <Modal 
          title="Success" 
          content="Your operation was successful!" 
          closeModal={closeModal} 
        />
      )}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
