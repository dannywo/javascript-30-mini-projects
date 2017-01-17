var inputs = document.querySelectorAll('.controls input')

function handleUpdate(){
    // const spacing = querySelector('input[date-sizing]')
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(
        `--${this.name}`, this.value + suffix
    );
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));