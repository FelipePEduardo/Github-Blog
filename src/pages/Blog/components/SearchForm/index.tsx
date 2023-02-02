import { useForm } from 'react-hook-form'
import { SearchFormContainer } from './styles'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

interface totalIssuesProps {
  totalIssues: number
  onLoadPosts: (query?: string) => Promise<void>
}

export function SearchForm({ totalIssues, onLoadPosts }: totalIssuesProps) {
  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchPosts(data: SearchFormInputs) {
    await onLoadPosts(`repo:FelipePEduardo/Github-Blog ${data.query}`)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchPosts)}>
      <div>
        <label htmlFor="SearchContent">Publicações</label>
        <span>{totalIssues} publicações</span>
      </div>
      <input
        type="text"
        id="SearchContent"
        placeholder="Buscar conteúdo"
        {...register('query')}
      />
    </SearchFormContainer>
  )
}
