
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