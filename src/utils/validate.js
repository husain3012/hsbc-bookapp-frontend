export const validateBook = (book) => {
    const errors = []
    if (!book.bookId) {
        errors.push(
            {
                message: "Book ID is required",
                type:"error"
            }
        );
    }
    if (!book.bookName || book.bookName.trim() === "" || book.bookName.length < 3) {
        errors.push(
            {
                message: "Book Name is required and should be at least 3 characters",
                type:"error"
            }
        );  
    }
    if (!book.bookAuthor || book.bookAuthor.trim() === "") {
        errors.push({
            message: "Book Author is required",
            type:"error"
        });
        
    }
    if (!book.bookPrice || book.bookPrice.trim() === "" || isNaN(book.bookPrice) || parseFloat(book.bookPrice) <= 0) {
        errors.push({
            message: "Book Price is required and should be a valid number",
            type:"error"
        });
        
    }
    return errors;
    };
    