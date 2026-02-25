type Theme = 'light' | 'dark';

function ThemeToggle() {
  function handleToggle(theme: Theme) {
    document.documentElement.setAttribute('data-theme', theme);
  }

  return (
    <div role="group" aria-label="Theme toggle">
      <button onClick={() => handleToggle('light')}>Light</button>
      <button onClick={() => handleToggle('dark')}>Dark</button>
    </div>
  );
}

export default ThemeToggle;