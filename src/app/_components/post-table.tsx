import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "~/components/ui/table";

interface PostTableProps {
  posts: {
    id: number,
    name: string,
    createdAt: Date,
    updatedAt: Date
  }[]
}

function formatDate(date: Date) {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }).format(date);
}

export function PostTable(props: PostTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">id</TableHead>
          <TableHead>name</TableHead>
          <TableHead>updatedAt</TableHead>
          <TableHead className="text-right">createdAt</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {props.posts.map(post => (
          <TableRow>
            <TableCell className="font-medium">{post.id}</TableCell>
            <TableCell>{post.name}</TableCell>
            <TableCell>{formatDate(post.createdAt)}</TableCell>
            <TableCell className="text-right">{formatDate(post.updatedAt)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
