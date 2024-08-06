<li class="header">THEME MANAGEMENT</li>
                        
<li class="{{ ! starts_with(Route::currentRouteName(), 'admin.nests') ?: 'active' }}">
    <a href="{{ route('admin.nests') }}">
    <i class="fab fa-theme"></i> <span>Theme</span>
    </a>
</li>