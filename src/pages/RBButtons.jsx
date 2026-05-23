import { useState } from 'react';
import { Button, ButtonGroup, Spinner, Stack, ToggleButton, ToggleButtonGroup } from 'react-bootstrap'
import { TypeBold } from 'react-bootstrap-icons';

const RBButtons = () => {


    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('1');


    const radios = [
        { name: 'Active', value: '1' },
        { name: 'Radio', value: '2' },
        { name: 'Radio', value: '3' },
    ];

    const handleClick = () => {
        alert("You clicked the primary button")
    }

    const [loading, setLoading] = useState(false)
    return (
        <div>

            <h4>RB Buttons</h4>

            <hr />


            <Button
                disabled={loading}
                onClick={() => setLoading(true)}>{loading ? <Spinner size='sm' /> : ''} Submit </Button>{' '}
            <Button
                variant='danger'
                disabled={!loading}
                onClick={() => setLoading(false)}>{loading ? "Reset" : 'Cancel'}  </Button>

            <br />
            <ButtonGroup className="mb-2">
                {radios.map((radio, idx) => (
                    <ToggleButton
                        key={idx}
                        id={`radio-${idx}`}
                        type="radio"
                        variant="outline-secondary"
                        name="radio"
                        value={radio.value}
                        checked={radioValue === radio.value}
                        onChange={(e) => setRadioValue(e.target.value)}
                    >
                        <TypeBold />
                    </ToggleButton>
                ))}
            </ButtonGroup>
            Currently selected item no = {radioValue}
            <hr />

            <ToggleButtonGroup type="checkbox" defaultValue={[1, 3]} className="mb-2" onChange={() => alert("test")}>
                <ToggleButton id="tbg-check-1" value={1}
                    variant="outline-secondary">
                    B
                </ToggleButton>
                <ToggleButton id="tbg-check-2" value={2}
                    variant="outline-secondary">
                    I
                </ToggleButton>
                <ToggleButton id="tbg-check-3" value={3}
                    variant="outline-secondary">
                    U
                </ToggleButton>
            </ToggleButtonGroup>
            Currently selected item no =

            <hr />
            <Stack direction='horizontal' gap={1}>
                <Button variant="outline-primary" onClick={handleClick}>Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="success">Success</Button>
                <Button variant="warning">Warning</Button>
                <Button variant="danger">Danger</Button>
                <Button variant="info">Info</Button>
                <Button variant="light">Light</Button>
                <Button variant="dark">Dark</Button>
                <Button variant="link">Link</Button>

                <Button href="#" variant="secondary" size="lg">
                    Link
                </Button>
            </Stack>


            <Stack direction='horizontal' gap={1}>
                <Button variant="primary" size="lg">
                    size="lg"
                </Button>

                <Button variant="secondary" >
                    no size prop
                </Button>

                <Button variant="secondary" size="sm">
                    size="sm"
                </Button>

            </Stack>
            <hr />


        </div>
    )
}

export default RBButtons