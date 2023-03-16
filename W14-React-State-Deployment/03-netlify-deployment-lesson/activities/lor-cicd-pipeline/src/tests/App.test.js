import App from '../App'
import { shallow } from 'enzyme'

// const setup is used beloe because it is a function that returns a shallow render of the component. This is to test the component without rendering the child components. It is called setup and not a different name because it is a common convention in testing. You can call it whatever you want, but it is a common convention to call it setup.
const setup = () => shallow(<App />)

// a wrapper in the below code is a shallow render of the component. It is called wrapper because it is a common convention in testing. You can call it whatever you want, but it is a common convention to call it wrapper. the term wrapper is popular because it is a wrapper around the component. 

//it is different from the above shallow render because it is a shallow render of the component and all of its child components. we use '${val}' because it is a common convention in testing. You can call it whatever you want, but it is a common convention to call it '${val}'. This should test if the child component renders without error. for example, if the child component is a button, it should test if the button renders without error. if it does render with an error, it should throw an error. example errors might be: "button is not defined", "button is not a function", "button is not a constructor", etc.  
const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`)


it('App Component Renders Without Error', () => {
  const wrapper = setup()
  const appComponent = findByTestAttr(wrapper, "component-app")

  // the code below includes tobe and 1. tobe is a jest function that tests if the value is what you expect it to be. 1 is the value that we expect it to be. the 1 represents 1 component. if there are 2 components, it should be 2. if there are 3 components, it should be 3. if there are 4 components, it should be 4. etc.
  expect(appComponent.length).toBe(1)
})