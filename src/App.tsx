import SubmitIcon from "@assets/icons/Submit";
import SubmitButton from "@components/Button/Submit";
import Container from "@components/Container";
import ErrorField from "@components/ErrorField";
import Header from "@components/Header";
import Input from "@components/Input";
import NoTodos from "@components/NoTodos";
import Todo from "@components/Todo";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const TodoSchema = z.object({
  id: z.string(),
  description: z.string(),
  done: z.boolean(),
});
export type TTodo = z.infer<typeof TodoSchema>;

type TFormValues = {
  todo: string;
  todoList: TTodo[];
};

const formSchema = z.object({
  todo: z.string().min(1, "Required Field"),
  todoList: z.array(TodoSchema),
});

const App = () => {
  const {
    register,
    handleSubmit,
    control,
    getValues,
    setValue,
    resetField,
    formState: { errors },
  } = useForm<TFormValues>({
    defaultValues: {
      todo: "",
      todoList: [],
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<TFormValues> = (data) => {
    const newTodos = [
      ...getValues("todoList"),
      {
        id: new Date().toISOString(),
        description: data.todo,
        done: false,
      },
    ];
    setValue("todoList", newTodos);
    resetField("todo");
  };

  const onTodoClick = (id: string) => {
    const newTodos = [
      ...getValues("todoList").map((todo) =>
        todo.id === id
          ? {
              ...todo,
              done: !todo.done,
            }
          : todo,
      ),
    ];
    console.log({ newTodos });
    setValue("todoList", [
      ...getValues("todoList").map((todo) =>
        todo.id === id
          ? {
              ...todo,
              done: !todo.done,
            }
          : todo,
      ),
    ]);
  };

  return (
    <Container>
      <Header />
      <section className="mt-6 md:mt-10 lg:mt-20">
        <form
          className="mx-auto w-4/5"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex">
            <Input
              id="todo-field"
              error={errors?.todo}
              required
              {...register("todo")}
            />
            <SubmitButton>
              <SubmitIcon />
            </SubmitButton>
          </div>
          {errors?.todo?.message && <ErrorField error={errors.todo.message} />}
        </form>
      </section>
      <section className="mx-auto mt-6 w-4/5">
        {getValues("todoList").length === 0 && <NoTodos />}

        <Controller
          name="todoList"
          control={control}
          render={({ field }) => (
            <>
              {/* to-do haha. */}
              <motion.ul>
                <AnimatePresence>
                  {field.value
                    .filter((todo) => !todo.done)
                    .map((todo) => (
                      <Todo
                        {...todo}
                        key={todo.id}
                        onClick={(id) => onTodoClick(id)}
                      />
                    ))}
                </AnimatePresence>
              </motion.ul>
              {/* not done */}
              <motion.ul>
                <AnimatePresence>
                  {field.value
                    .filter((todo) => todo.done)
                    .map((todo) => (
                      <Todo
                        {...todo}
                        key={todo.id}
                        onClick={() => onTodoClick(todo.id)}
                      />
                    ))}
                </AnimatePresence>
              </motion.ul>
            </>
          )}
        />
      </section>
    </Container>
  );
};

export default App;
