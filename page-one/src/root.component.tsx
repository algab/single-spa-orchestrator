import { navigateToUrl } from 'single-spa';

export default function Root(props) {
  return (
    <section>
      <div>{props.name} is mounted !</div>
      <button onClick={() => navigateToUrl('/two')}>Página 2</button>
    </section>
  );
}
