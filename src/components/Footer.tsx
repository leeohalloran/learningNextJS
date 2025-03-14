import Container from '@/components/Container';

const Footer = () => {
    return (
        <footer className='mt-6 mb-8 font-light text-center'>
            <Container className='flex justify-between p-4 text-sm'>
                <p> InvoiceWorld &copy; 2024 - {new Date().getFullYear()} </p>
                <p>
                    Created by L O'Halloran with NextJs, Xata and Clerk
                </p>
            </Container>
        </footer>)
}

export default Footer;