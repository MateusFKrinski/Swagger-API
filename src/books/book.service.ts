import BookModel, {IBook} from "./book.schema";

export class BookService {
  public async create(book: IBook) {
    const existingBook = await BookModel.findOne({ ISBN: book.ISBN });
    if (existingBook) {
      throw new Error("Book with this ISBN already exists");
    }
    return await BookModel.create(book);
  }

  public async find() {
    return BookModel.find();
  }

  public async findByTitle(title: string) {
    return BookModel.find({title: title});
  }

  public async update(id: string, book: Partial<IBook>) {
    return BookModel.findByIdAndUpdate(id, book, {
      new: true,
    });
  }

  public async delete(id: string) {
    return BookModel.findByIdAndDelete(id);
  }
}
