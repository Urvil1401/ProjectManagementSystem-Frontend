import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input"; // Adjusted the import path
import { Button } from "@/components/ui/button"; // Added missing Button import
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createComment } from "@/Redux/Comment/Action";

const CreateCommentForm = ({ issueId }) => {
    const dispatch = useDispatch();
    const form = useForm({
        defaultValues: {
            content: "",
        },
    });

    const onSubmit = (data) => {
        dispatch(createComment({content:data.content,issueId}))
        console.log("create project form", data);
    };

    return (
        <div>
            <Form {...form}>
                <form className="flex gap-2" onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        control={form.control}
                        name="content"
                        render={({ field }) => (
                            <FormItem>
                                <div className="flex gap-2">
                                    <Avatar>
                                        <AvatarFallback>R</AvatarFallback>
                                    </Avatar>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            type="text"
                                            className="w-[20rem]"
                                            placeholder="add comment here..."
                                        />
                                    </FormControl>
                                </div>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">
                        save
                    </Button>
                </form>
            </Form>
        </div>
    );
};

export default CreateCommentForm;
