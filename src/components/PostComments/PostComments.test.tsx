import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

const comments = [
    {
        comment: 'teste 1', 
        id: 1
    },
    {
        comment: 'teste 2', 
        id: 2
    }
]

describe('Teste para o componente PostComment', () => { 
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    })

    test('Deve renderizar com dois comentários', () =>{
        const {debug} = render(<PostComment  />)

        fireEvent.change(screen.getByTestId('campo-comment'), {
            target: {
                value: 'Comentario Teste 1'
            }    
        })
        fireEvent.click(screen.getByTestId('btn-comment'))

        fireEvent.change(screen.getByTestId('campo-comment'), {
            target: {
                value: 'Comentario Teste 2'
            }    
        })
        fireEvent.click(screen.getByTestId('btn-comment'))
        debug()
        expect(screen.getAllByTestId('list-comment')).toHaveLength(2)

    })
});