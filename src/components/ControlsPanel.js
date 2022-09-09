import ColorControl from './ColorControl'
import styles from './ControlsPanel.module.css'

export default function ControlsPanel({state, setState}) {

    const bodyColorChange = (color) => {
        setState((state) => {
            return {
                ...state,
                color
            }
        })
    }

    const exhaustColorChange = (color) => {
        setState((state) => {
            return {
                ...state,
                exhaust: color
            }
        })
    }

    const accentColorChange = (color) => {
        setState((state) => {
            return {
                ...state,
                accent: color
            }
        })
    }

    const plasticColorChange = (color) => {
        setState((state) => {
            return {
                ...state,
                plastic: color
            }
        })
    }

    return (
        <div className={styles.container}>
            <div className={styles.title}>Color Options</div>
            <div>Body</div>
            <div className={styles.colorWrapper}>
                <ColorControl color={state.color} colorChange={bodyColorChange} />
            </div>
            <div>Accent</div>
            <div className={styles.colorWrapper}>
                <ColorControl color={state.accent} colorChange={accentColorChange} />
            </div>
            <div>Plastic</div>
            <div className={styles.colorWrapper}>
                <ColorControl color={state.plastic} colorChange={plasticColorChange} />
            </div>
            <div>Exhaust</div>
            <div className={styles.colorWrapper}>
                <ColorControl color={state.exhaust} colorChange={exhaustColorChange} />
            </div>
        </div>
    )
}