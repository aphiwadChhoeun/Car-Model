import styles from './ControlsPanel.module.css'

export default function ColorControl({ color, colorChange }) {
    const colorGroup = ['#277BC0', '#EB1D36', '#3D8361', '#FF7F3F', '#191A19', '#1B2430', '#ababab']

    return (
        <>
            {colorGroup.map((currentColor) => (
                <button
                    className={styles.button + ' ' + (color === currentColor ? styles.active : null)}
                    style={{ background: currentColor }}
                    onClick={() => colorChange(currentColor)}></button>
            ))}

        </>
    )
}