
export function createUseEffectStep(currentStep: number, stepNum: number) {
  return {
    step: stepNum,
    title: 'Create a useEffect hook',
    active: currentStep === stepNum,
    description: (
      <>
        <strong>Create an effect with the <code>client</code> as a dependency.</strong>
        <p>Make sure to check if the <code>client</code> is <code>null</code> or <code>undefined</code> before you use it.</p>
      </>
    )
  };
}

export function createGetSnippylyStep(currentStep: number, stepNum: number) {
  return {
    step: stepNum,
    title: 'Get the Snippyly client',
    active: currentStep === stepNum,
    description: (
      <>
        <strong>Import the <code>useSnippylyClient</code> React hook.</strong>
        <p>You can use this hook within your component to fetch the Snippyly client.</p>
      </>
    )
  };
}

export function createGetInstanceStep(currentStep: number, stepNum: number, instanceType: string) {
  return {
    step: stepNum,
    title: `Get an instance of the ${instanceType} element`,
    active: currentStep === stepNum,
    description: (
      <>
        <strong>Fetch the {instanceType} element from the Snippyly client.</strong>
        <p>At this point, the Snippyly instance should be loaded and available to you on the <code>window</code> object.</p>
      </>
    )
  };
}