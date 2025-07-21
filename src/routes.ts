import { Router } from "express";
import bookController from "./books/book.controller";
import { verifyToken } from "./auth/verify.middleware";

const routes = Router();

/**
 * @swagger
 * tags:
 * name: Books
 * description: CRUD Books
 */

/**
 * @swagger
 * /books:
 *   post:
 *     summary: Create a book
 *     tags:
 *       - Books
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - author
 *               - ISBN
 *             properties:
 *               title:
 *                 type: string
 *                 description: Book Title
 *                 example: The Great Gatsby
 *               author:
 *                 type: string
 *                 description: Book Author
 *                 example: F. Scott Fitzgerald
 *               ISBN:
 *                 type: string
 *                 description: Book ISBN
 *                 example: 9780744066868
 *     responses:
 *       201:
 *         description: Book created
 *       400:
 *         description: Bad Request
 *       500:
 *         description: Internal Server Error
 */
routes.post("/books", bookController.create);

/**
 * @swagger
 * /books:
 *   get:
 *     summary: Get all books
 *     tags:
 *       - Books
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *       500:
 *         description: Internal Server Error
 */
routes.get("/books", verifyToken, bookController.find);

/**
 * @swagger
 * /books/{title}:
 *   get:
 *     summary: Find a book by title
 *     tags:
 *       - Books
 *     parameters:
 *       - in: path
 *         name: title
 *         required: true
 *         schema:
 *           type: string
 *         description: Title of the book
 *     responses:
 *       200:
 *         description: Book found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 title:
 *                   type: string
 *                   description: Book Title
 *                   example: The Great Gatsby
 *                 author:
 *                   type: string
 *                   description: Book Author
 *                   example: F. Scott Fitzgerald
 *                 ISBN:
 *                   type: string
 *                   description: Book ISBN
 *                   example: 9780744066868
 *       404:
 *         description: Book not found
 *       500:
 *         description: Internal Server Error
 */
routes.get("/books/:title", bookController.findByTitle);

/**
 * @swagger
 * /books/{id}:
 *   put:
 *     summary: Update a book
 *     tags:
 *       - Books
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the book
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Book Title
 *                 example: The Great Gatsby
 *               author:
 *                 type: string
 *                 description: Book Author
 *                 example: F. Scott Fitzgerald
 *               ISBN:
 *                 type: string
 *                 description: Book ISBN
 *                 example: 9780744066868
 *     responses:
 *       200:
 *         description: Book updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 title:
 *                   type: string
 *                   description: Book Title
 *                   example: The Great Gatsby
 *                 author:
 *                   type: string
 *                   description: Book Author
 *                   example: F. Scott Fitzgerald
 *                 ISBN:
 *                   type: string
 *                   description: Book ISBN
 *                   example: 9780744066868
 *       400:
 *         description: Bad Request
 *       404:
 *         description: Book not found
 *       500:
 *         description: Internal Server Error
 */
routes.put("/books/:id", bookController.update);

/**
 * @swagger
 * /books/{id}:
 *   delete:
 *     summary: Delete a book
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the book
 *     responses:
 *       204:
 *         description: Book deleted
 *       404:
 *         description: Book not found
 *       500:
 *         description: Internal Server Error
 */
routes.delete("/books/:id", bookController.delete);

export { routes };
